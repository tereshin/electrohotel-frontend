import BookingForm from "../booking-form"
import TitleLarge from "../ui/TitleLarge"

const FooterForm = () => {
    return (
        <div className="bg-[#01362A] p-4 md:p-[100px] text-hotel-off-white w-full md:w-1/2">
            <TitleLarge>Отправляйтесь в путешествие вместе с нами</TitleLarge>
            <BookingForm />
        </div>
    )
}

export default FooterForm;