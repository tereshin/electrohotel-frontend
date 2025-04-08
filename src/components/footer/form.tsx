
import BookingForm from "../booking-form"
import TitleLarge from "../ui/TitleLarge"

const FooterForm = () => {
    return (
        <div className="bg-[#01362A] px-4 py-10 md:p-[100px] text-hotel-off-white w-full md:w-1/2">
            <TitleLarge>Отправляйтесь <br/> в путешествие <br/>вместе с нами</TitleLarge>
            <BookingForm variant="vertical" className="mt-8" />
        </div>
    )
}

export default FooterForm;
