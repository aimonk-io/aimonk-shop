import React from 'react';
import Image from 'next/image';
const AboutPage = () => {
    return (
        <main className="py-12">
            <div className="px-2 py-6 gap-[0.75rem">
                <h1 className="text-2xl text-center font-['Georgia'] font-300 mb-4 py-6">About</h1>
                <div className="text-[.75rem] tracking-[.06em] leading-[1.4em] mb-[1.125rem]">
                    <p>
                        Established in 2011 in Gangtok, Sikkim Kokkivo is a lifestyle brand and progressive retail concept. Founded by Creative Director Ronnie Fieg, Kokkivo offers seasonal collections of men’s, women’s and children’s apparel, accessories and footwear through a distinct lens of personal storytelling, effortless styling, and uncompromising detail to fabrication and design. Kokkivo embodies a multi-faceted lifestyle, working closely alongside collaborators around the world who are leaders in their respective product categories.
                    </p>
                    <br />
                    <p>
                        Kokkivo operates 13 standalone boutiques across the globe, and has shop-in-shops in Bergdorf Goodman, Hirshleifers and Selfridges. Kokkivo Treats, conceived from Kokkivo’s founder Ronnie Fieg’s childhood love for cereal, operates in nine locations and has one standalone space. Kokkivo’s food and beverage arm expanded in 2022, and together with Major Food Group, Sadelle’s at Kokkivo opened in Kokkivo Paris and later, Kokkivo Miami Design District and Kokkivo Toronto. In 2023, Kokkivo opened the first Kokkivo Women flagship in New York City, and appointed Kokkivo Women Creative Director Daniëlle Cathari.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                        <Image src={'/aboutUs/01_Hero_1.webp'} alt={''} width={706.5} height={883.19} />
                    </div>
                    <div className="">
                        <Image src={'/aboutUs/MALIBU-STORE3661_9e9b56d8-8680-4755-a456-e21fd927edef.webp'} alt={''} width={706.5} height={883.19} />
                    </div>
                </div>
            </div>

        </main>

    );
};

export default AboutPage;