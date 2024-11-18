import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PublisherCard } from '@/components/ui/publisher-card';
const axios = require('axios').default;

async function getServerSideData() {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/v1/publishers`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
}
export interface PublisherProps {
  name: string;
  image_url: string;
  description: string;
}

export default async function ProductsPage() {
  const data = await getServerSideData();
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all" className="flex flex-wrap flex-1 justify-start">
        {data?.map((card: PublisherProps) => (
          <PublisherCard
            name={card.name}
            image_url={card.image_url}
            description={card.description}
          />
        ))}
      </TabsContent>
    </Tabs>
  );
}
