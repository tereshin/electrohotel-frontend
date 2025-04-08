
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Users, ChevronDown } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CustomButton } from '../ui/custom-button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import ArrowIcon from '../icons/ArrowIcon';

interface BookingFormProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

const BookingForm: React.FC<BookingFormProps> = ({ className, variant = 'horizontal' }) => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever inputs change
  React.useEffect(() => {
    if (checkInDate && checkOutDate && adults > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [checkInDate, checkOutDate, adults]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Here you would typically handle the form submission
    console.log({
      checkInDate,
      checkOutDate,
      adults,
      children
    });

    // For this example, we'll just navigate to a theoretical checkout page
    alert('Redirecting to checkout...');
    // In a real app, you'd use router.push('/checkout') or similar
  };

  return (
    <div className={cn("rounded-lg shadow-xl mx-auto -mt-20 relative z-10 bg-transparent", className)}>
      <form 
        onSubmit={handleSubmit} 
        className={cn(
          "grid gap-6 md:gap-8",
          variant === 'horizontal' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
        )}
      >
        {/* Check-in Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">Заезд</label>
          <Popover>
            <PopoverTrigger asChild>
              <button 
                type="button" 
                className="w-full flex items-center justify-between text-white bg-transparent border-b border-white pb-4 focus:outline-none"
              >
                {checkInDate ? format(checkInDate, 'PP') : <span>Выберите дату</span>}
                <CalendarIcon className="ml-2 h-4 w-4 opacity-70" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar 
                mode="single" 
                selected={checkInDate} 
                onSelect={setCheckInDate} 
                disabled={(date) => date < new Date()} 
                initialFocus 
                className="pointer-events-auto" 
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Check-out Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">Выезд</label>
          <Popover>
            <PopoverTrigger asChild>
              <button 
                type="button" 
                className="w-full flex items-center justify-between text-white bg-transparent border-b border-white pb-4 focus:outline-none"
              >
                {checkOutDate ? format(checkOutDate, 'PP') : <span>Выберите дату</span>}
                <CalendarIcon className="ml-2 h-4 w-4 opacity-70" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar 
                mode="single" 
                selected={checkOutDate} 
                onSelect={setCheckOutDate} 
                disabled={(date) => date < (checkInDate || new Date())} 
                initialFocus 
                className="pointer-events-auto" 
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">Кол-во гостей</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                type="button" 
                className="w-full flex items-center justify-between text-white bg-transparent border-b border-white pb-4 focus:outline-none"
              >
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 opacity-70" />
                  <span>
                    {adults} взрослы{adults !== 1 ? 'х' : 'й'}{children > 0 ? `, ${children} ${children !== 1 ? 'ребенка' : 'ребенок'}` : ''}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-3 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium">Взрослые</span>
                <div className="flex items-center space-x-2">
                  <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="h-8 w-8 rounded-full border border-input flex items-center justify-center hover:bg-muted transition-colors">
                    -
                  </button>
                  <span className="w-6 text-center">{adults}</span>
                  <button type="button" onClick={() => setAdults(Math.min(10, adults + 1))} className="h-8 w-8 rounded-full border border-input flex items-center justify-center hover:bg-muted transition-colors">
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Дети</span>
                <div className="flex items-center space-x-2">
                  <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="h-8 w-8 rounded-full border border-input flex items-center justify-center hover:bg-muted transition-colors">
                    -
                  </button>
                  <span className="w-6 text-center">{children}</span>
                  <button type="button" onClick={() => setChildren(Math.min(10, children + 1))} className="h-8 w-8 rounded-full border border-input flex items-center justify-center hover:bg-muted transition-colors">
                    +
                  </button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Submit Button */}
        <div className="flex items-end">
          <CustomButton variant="base1" type="submit" className="w-full" disabled={!isFormValid}>
            Забронировать номер <ArrowIcon />
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
