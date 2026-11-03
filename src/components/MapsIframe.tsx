interface GoogleMapsProps {
    address: string;
  }
  
  export function GoogleMaps({ address }: GoogleMapsProps) {
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
      address
    )}&output=embed`;
  
    return (
      <div className="w-full h-80 overflow-hidden rounded-xl shadow-md">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`Localização: ${address}`}
        />
      </div>
    );
  }
  