import { useRef } from "react";
import { CustomButton } from "./custom-button";
import { BookingFormRef } from "../booking-form";
import { BookingForm } from "../booking-form";
import ArrowIcon from "../icons/ArrowIcon";

interface BookingButtonProps {
    variant?: 'base1' | 'base2';
}

export const BookingButton = ({ variant = 'base1' }: BookingButtonProps) => {
    const bookingFormRef = useRef<BookingFormRef>(null);
    const handleBookingClick = () => {
        if (bookingFormRef.current) {
            bookingFormRef.current.submitForm();
        }
    };
    return (
        <div>
            <CustomButton variant={variant} size="default" className="w-max mt-5" onClick={handleBookingClick}>
                Забронировать номер <ArrowIcon />
            </CustomButton>
            <div className="hidden">
                <BookingForm ref={bookingFormRef} />
            </div>
        </div>
    );
};