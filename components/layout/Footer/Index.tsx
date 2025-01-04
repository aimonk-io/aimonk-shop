"use client"
import { FooterSections, SocialLinks } from "@/Data/Footer/Index";
import Footer from "./Footer";




export default function FocterComponent(){
    return <Footer sections={FooterSections} socialLinks={SocialLinks} />
};
