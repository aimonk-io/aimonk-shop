// import Footer from "@/components/layout/Footer/Footer";
import Nav from "@/components/layout/Navigations/Index";
import Foter from "@/components/layout/Footer/Index"
import Hero from "@/components/layout/Hero/Hero";
import Section from "@/components/layout/Section/Section"
export default function Home() {
  return (
    
    <div className="grid">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <Hero   
        heading="Kith for BMW 2024"
        subheading="Chapter III is comprised of a multi-faceted experience and collection that bridges BMW’s past and present through the Kith lens."
        callToActions={[
          { label: "Shop Now", href: "/shop", style: "border border-white-500 text-white hover:bg-white" },
          { label: "Learn More", href: "/learn-more", style: " border border-white-500 text-white hover:bg-white" },
        ]} 
        backgroundImage={""} 
      />

      <Section
        cols={3}
        cards={[
          {
            imageSrc: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            imageAlt: 'Bold typography',
            description: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            imageAlt: 'Bold typography',
            description: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            imageAlt: 'Bold typography',
            description: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
            imageAlt: 'Bold typography',
            description: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.',
          },
          
        ]}
      />
      
      </main>
      <footer className="">
      </footer>
        <Foter />
    </div>
  );
}
