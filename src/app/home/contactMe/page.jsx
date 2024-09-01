import ContactForm from "@/app/components/ContactForm";


export default function ContactmePage () {
  
  return (
    <ContactForm action={Connect}/>
  )
}

async function Connect(prevState,formData){
  "use server"
  const name = formData.get("username");
}