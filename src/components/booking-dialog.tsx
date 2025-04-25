import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BookingForm } from '@/components/booking-form';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roomTitle?: string;
}

const BookingDialog: React.FC<BookingDialogProps> = ({
  open,
  onOpenChange,
  roomTitle,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium uppercase text-hotel-darkest-green">
            {roomTitle ? `Забронировать ${roomTitle}` : 'Забронировать номер'}
          </DialogTitle>
        </DialogHeader>
        <BookingForm variant="vertical" color="white" />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog; 