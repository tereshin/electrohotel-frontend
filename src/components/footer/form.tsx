
import BookingForm from "../booking-form"
import Title from "../ui/Title"

const FooterForm = () => {
    return (
        <div className="bg-[#01362A] px-4 py-10 md:p-[100px] text-hotel-off-white w-full md:w-1/2">
            <Title>Отправляйтесь <br/> в путешествие <br/>вместе с нами</Title>
            <BookingForm variant="vertical" className="mt-8" />
        </div>
    )
}

export default FooterForm;
