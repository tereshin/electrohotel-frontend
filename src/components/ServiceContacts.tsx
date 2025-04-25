import FeatureIcon from "@/components/ui/FeatureIcon";

export const ServiceContacts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
      <FeatureIcon 
        icon="/icons/reception-icon.svg" 
        text="У администратора на ресепшн" 
      />
      <FeatureIcon 
        icon="/icons/phones-icon.svg" 
        text="По телефону +7&nbsp;(496)&nbsp;574-42-72" 
      />
      <FeatureIcon 
        icon="/icons/phone-icon.svg" 
        text='С помощью внутреннего телефона' 
      />
      <FeatureIcon 
        icon="/icons/whatsapp-icon.svg" 
        text="Через WhatsApp +7&nbsp;996&nbsp;365 23&nbsp;30" 
      />
    </div>
  );
}; 