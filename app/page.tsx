import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1 >Popular Companions</h1>
        
        
        <section className="home-section">
            <CompanionCard 
              id="123"
              name="Neura the Brainy Explorer"
              topic="Neural Networks of the Brain"
              subject="science"
              duration={45}
              color="#ffda6e"
          /><CompanionCard 
              id="456"
              name="Countsy the Number Wizard"
              topic="Derivatives & integrals"
              subject="maths"
              duration={30}
              color="#e5d0ff"
          />
            <CompanionCard 
              id="789"
              name="Neura the Brainy Explorer"
              topic="languge"
              subject="English Literature"
              duration={45}
              color="#BDE7FF"
          />
        </section>

        <section className="home-section">
          <CompanionsList />
          <CTA />
        </section>
    </main>
    
  )
}

export default Page