import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { format, addDays } from 'date-fns';
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
  color?: 'default' | 'white';
}

export interface BookingFormRef {
  submitForm: () => void;
}

export const BookingForm = forwardRef<BookingFormRef, BookingFormProps>(({ className, variant = 'horizontal', color = 'default' }, ref) => {
  const [checkInDate, setCheckInDate] = useState<Date>(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  });
  const [checkOutDate, setCheckOutDate] = useState<Date>(() => {
    const date = addDays(new Date(), 1);
    date.setHours(0, 0, 0, 0);
    return date;
  });
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isFormValid, setIsFormValid] = useState(true);
  const [open, setOpen] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  // Update check-out date when check-in date changes
  React.useEffect(() => {
    if (checkInDate) {
      if (checkOutDate <= checkInDate || checkOutDate === checkInDate) {
        const newDate = addDays(checkInDate, 1);
        newDate.setHours(0, 0, 0, 0);
        setCheckOutDate(newDate);
      }
    }
  }, [checkInDate, checkOutDate]);

  // Validate form whenever inputs change
  React.useEffect(() => {
    if (checkInDate && checkOutDate && adults > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [checkInDate, checkOutDate, adults]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (!isFormValid) return;

    // Format dates as DD-MM-YYYY
    const formattedCheckInDate = format(checkInDate, 'dd-MM-yyyy');
    const formattedCheckOutDate = format(checkOutDate, 'dd-MM-yyyy');
    
    // Construct the URL with all required parameters
    const baseUrl = 'https://reservationsteps.ru/rooms/index/4bdeba76-9f0b-4007-8f64-7fcd6aff2f1a';
    const params = new URLSearchParams({
      lang: 'ru',
      scroll_to_rooms: '1',
      is_auto_search: '0',
      colorSchemePreview: '0',
      onlyrooms: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      orderid: '',
      servicemode: '0',
      firstroom: '0',
      vkapp: '',
      insidePopup: '0',
      exval: 'dev4129_A|dev5765_A',
      dfrom: formattedCheckInDate,
      dto: formattedCheckOutDate,
      adults: adults.toString()
    });
    
    // Add children parameter only if children are selected
    if (children > 0) {
      const childrenArray = Array(children).fill('10');
      params.append('children', JSON.stringify(childrenArray));
    }
    
    const redirectUrl = `${baseUrl}?${params.toString()}`;
    
    // Redirect to the URL
    window.location.href = redirectUrl;
  };

  // Expose the submit function through the ref
  useImperativeHandle(ref, () => ({
    submitForm: () => handleSubmit()
  }));

  return (
    <div className={cn("rounded-lg mx-auto relative z-10 bg-transparent", className)}>
      <form 
        onSubmit={handleSubmit} 
        className={cn(
          "grid gap-6 md:gap-8",
          variant === 'horizontal' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
        )}
      >
        {/* Check-in Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Заезд</label>
          <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
            <PopoverTrigger asChild>
              <button 
                type="button" 
                className={cn(
                  "w-full flex items-center justify-between bg-transparent border-b border-gray-400 pb-4 focus:outline-none",
                  color === 'default' && 'text-white border-white'
                )}
              >
                {checkInDate ? format(checkInDate, 'PP') : <span>Выберите дату</span>}
                <CalendarIcon className="ml-2 h-4 w-4 opacity-70" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar 
                mode="single" 
                selected={checkInDate} 
                onSelect={(date) => {
                  if (date) {
                    date.setHours(0, 0, 0, 0);
                    setCheckInDate(date);
                    setCheckInOpen(false);
                  }
                }}
                disabled={(date) => date < new Date()} 
                  
                className="pointer-events-auto" 
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Check-out Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Выезд</label>
          <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
            <PopoverTrigger asChild>
              <button 
                type="button" 
                className={cn(
                  "w-full flex items-center justify-between bg-transparent border-b border-gray-400 pb-4 focus:outline-none",
                  color === 'default' && 'text-white border-white'
                )}
              >
                {checkOutDate ? format(checkOutDate, 'PP') : <span>Выберите дату</span>}
                <CalendarIcon className="ml-2 h-4 w-4 opacity-70" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar 
                mode="single" 
                selected={checkOutDate} 
                onSelect={(date) => {
                  if (date && checkInDate) {
                    date.setHours(0, 0, 0, 0);
                    if (date <= checkInDate) {
                      const newDate = addDays(checkInDate, 1);
                      newDate.setHours(0, 0, 0, 0);
                      setCheckOutDate(newDate);
                    } else {
                      setCheckOutDate(date);
                    }
                    setCheckOutOpen(false);
                  }
                }}
                disabled={(date) => date <= (checkInDate || new Date())} 
                  
                className="pointer-events-auto" 
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Кол-во гостей</label>
          <DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
            <DropdownMenuTrigger asChild
             onPointerDown={(e) => e.preventDefault()}
             onClick={() => setOpen(!open)}>
              <button 
                type="button" 
                className={cn(
                  "w-full flex items-center justify-between bg-transparent border-b border-gray-400 pb-4 focus:outline-none",
                  color === 'default' && 'text-white border-white'
                )}
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
});

BookingForm.displayName = 'BookingForm';
