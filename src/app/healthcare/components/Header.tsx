import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full">
      <div className="w-full py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/healthcare" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/healthcare/logos/nova-health-logo.svg"
              alt="Nova Health - Healthcare Platform"
              width={200}
              height={48}
              className="h-12 w-auto"
              style={{ 
                filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                maxWidth: '200px'
              }}
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/healthcare/doctors" 
              className="text-blue-700 hover:text-blue-900 font-medium text-base tracking-wide transition-colors duration-200"
              style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
            >
              Doctors
            </Link>
            <Link 
              href="/healthcare/locations" 
              className="text-blue-700 hover:text-blue-900 font-medium text-base tracking-wide transition-colors duration-200"
              style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
            >
              Locations
            </Link>
            <Link 
              href="/healthcare/about" 
              className="text-blue-700 hover:text-blue-900 font-medium text-base tracking-wide transition-colors duration-200"
              style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
            >
              About Us
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/healthcare/appointment" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-base transition-colors duration-200 shadow-sm"
              style={{ fontFamily: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif" }}
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
