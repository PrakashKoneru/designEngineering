import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* All content sections wrapped in 1280px max-width container */}
      <div className="max-w-[1280px] mx-auto">
        <Header />
        <HeroCarousel />
        
        {/* Additional content sections can go here */}
        <div className="py-16 px-6">
          <div className="text-center">
          <h2 
            className="text-3xl font-light text-blue-900 mb-6"
            style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
          >
            Experience Excellence in Healthcare
          </h2>
          <p 
            className="text-lg text-blue-700 max-w-3xl mx-auto"
            style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
          >
            At Nova Health, we combine cutting-edge medical technology with compassionate care 
            to provide the highest quality healthcare services for you and your family.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}