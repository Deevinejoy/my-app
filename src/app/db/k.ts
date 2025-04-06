
type blogType = {
    id: number;
    title: string;
    img: string;
    content: string;
    sections: {
        heading: string;
        content: string;

    }[];
    comments: {
        name: string; 
        content: string;
    }[];
}


const blogs= [
        {
            id: 1,
            title: "<h1>Weed in Sydney</h1>",
            img: "/syd.png",
            content: "<p>Where to get weed in Sydney, Australia. Despite popular belief, Sydney is not Australia’s capital. It is, however, the country’s largest metropolis. It’s a city unlike any other, with a spectacular climate, beaches, culture, nightlife, and a youthful population. The city is a fantastic vacation destination, and you’ll be pleased to learn that the locals enjoy smoking cannabis in Sydney. Continue reading to learn more about cannabis/marijuana in Australia (Sydney).</p>",
            sections: [
                {
                    "heading": "<h2>Cannabis in Australia – Laws</h2>",
                    "content": "<p>Cannabis is outlawed on a federal level in Australia, however different states have varying laws regarding possession. Adelaide is in South Australia, where possessing a small amount of cannabis for personal use is decriminalized and punishable by a nominal fine if detected. There is no criminal record if the fine is paid. Weed laws in Sydney are very severe.</p>",
                    "additional_content": "<p>Weed has a punishment similar to a parking ticket. Smoking in public is a federal offense that can result in more significant penalties in some situations. Australia is a pretty free country when it comes to marijuana, yet growing and selling it is taken quite seriously. It’s best not to get involved because you could end up in prison for them.</p>"
                },
                {
                    "heading": "<h2>Where to Get Weed in Sydney</h2>",
                    "content": "<p>The majority of Sydney residents purchase marijuana from dealers who deliver it to their homes. For the highest quality, ask about the neighborhood and find someone who can help you out. Many of them smoke, and you’d be shocked how quickly someone at a bar can assist you in obtaining marijuana.</p>",
                    "additional_content": "<p>If you don’t want to be social, you can go to Kings Cross, albeit this is not encouraged. There are dealers at Kings Cross, which is a horrible neighborhood. The grade of the weed varies, but it is almost certainly inferior to what you are accustomed to in Europe or America. For a gram of pot, you should expect to pay around 20 Australian dollars or 13 euros.</p>"
                },
                {
                    "heading": "<h2>Conclusion</h2>",
                    "content": "<p>Marijuana is currently illegal in Sydney and throughout Australia for recreational use, although some states have legalized it for medical purposes. Possession, use, sale, and cultivation of marijuana can result in fines, imprisonment, or both. However, there is a growing movement advocating for the legalization of marijuana for both medical and recreational use in Australia, with some politicians and organizations supporting the idea.</p>",
                    "additional_content": "<p>Despite this, the current laws remain in place, and individuals caught breaking them can face serious legal consequences. It is important to be aware of the laws surrounding marijuana use in Sydney and throughout Australia to avoid any legal issues.</p>"
                }
            ],
            comments: [
                {
                    name: "paz",
                    content: "I have been ordering from DN over a year now and every single experience has been five stars. Quality customer service combined with an incredible selection of nothing but Top shelf strains. The weed is amazing from the taste, looks and smell. Give these guy a try and see for yourself why he is the best.",
                 
                },
                {
                    name: "kelvin",
                    content: "Discreet Narcotics is the one. Super responsive, on time and the weed is absolute fire. The strains are seriously on point. Best service I've found by far, won’t be using anything else unless I find a reason to."
                }
              
            ]
        },
        {
            id: 2,
            title: "<h1>Weed in Vienna</h1>",
            img: "/syd.png",
            content: "<p>Wondering where you can buy weed in Vienna?. Austria’s capital, Vienna, is situated on the Danube River in the east of the nation. Mozart, Beethoven, and Sigmund Freud were among the people who helped to shape the city’s cultural and intellectual legacy. The city is renowned for its Imperial palaces, which include Schönbrunn, the summer home of the Habsburgs. Historic and modern structures in the MuseumsQuartier neighborhood house artwork by painters including Gustav Klimt and Egon Schiele. Buying weed in Vienna won’t be an issue when you meet the right buyer. .</p>",
            sections: [
                {
                    heading: "<h2>Is Marijuana legal in Austria?</h2>",
                    content: "<p>According to the Addictive Drugs Act, only the Austrian Agency for Health and Food Safety (AGES), which is overseen by the Austrian Federal Ministries of Labor, Social Affairs, Health, and Consumer Protection, as well as the Austrian Federal Ministry of Agriculture, is permitted to cultivate cannabis for pharmaceutical and related scientific purposes. The same privilege is extended to subsidiaries created for this purpose, in which AGES owns at least 75% of the shares.According to the Austrian Trade Act published by the Federal Ministry of Health, the manufacture, manufacturing, conversion, acquisition, and possession of medicinal cannabis necessitate a particular authorization for pharmaceutical production. Disposal is only allowed for approved receivers and pharmacies.Instead of the general population, the producers and dealers will be the focus of the legislation and the police. Despite being widely accessible, cannabis is illegal in Austria. However, medical marijuana is permitted.When the police detain you, they’ll try to determine whether the marijuana you’re carrying is for your own use or is intended for sale. Six months in prison is the maximum punishment for small amounts.</p>"
                },
                {
                    heading: "<h2>Where can I get weed in Vienna</h2>",
                    content: "<p>The train and metro stations are crowded with drug merchants selling marijuana and other narcotics, just like those in the majority of other large European cities.The best U-Bahn stops to purchase marijuana from are MuseumsQuartier, Praterstern, and Westbahnhof.Large parks like Stadtpark and the area near to the nightclub “Flex,” next to the Schottenring station, are other locations in Vienna where marijuana can be purchased. For all stations, the same guidelines are in effect.When you nod back at a cannabis dealer in Vienna, they will approach you and try to offer you some marijuana. Keep your ears open for that one; marijuana is called “grass” in German. Some dealers may approach you without having any marijuana on them. If you simply walk by, the dealers, who are often Arab or black, will approach you and offer to sell you some blunt based on your age and attire.Typically, the merchants will sell you subpar brown cannabis that won’t make you feel great but will get you high. The quality of cannabis might vary greatly depending on where you purchase it in Vienna, particularly from street vendors. Due to the bulk of dealers in Vienna being Arabs with trustworthy sources, hash is typically of superior grade there.</p>"
                }
            ],
            comments: [
                {
                    name: "Don",
                    content: "Raz is absolutely incredible. The weed he sells knocked me off my socks. To be honest, after reading the reviews above, I thought it was some kind of a hoax. But finally, when I gave him a try, did everything he asked and he showed up in style and I must say he is very helpful, friendly, and responsive."
                },{
                    name: "williams",
                    content:
                "This article is fantastic. What makes it better is the fact that after reading the comments about this dude Raz, I decided to give him a try..."
                }
               
            ]
        },
        {
            id: 3,
            title: "<h1>Weed in Salzburg</h1>",
            img: "/syd.png",
            content: "<p>Get cannabis in Salzburg. “Salt Castle” is the meaning of the name Salzburg (Latin: Salis Burgium). The name comes from the salt-carrying boats on the Salzach River, which had to pay a toll in the 8th century, as was usual for many municipalities and cities along European rivers. Salzburg is Austria’s fourth and, arguably, most attractive city. The city is full of palaces designed to be explored from a lofty vantage point. With a little weed, you’ll have a great time in Salzburg.</p>",
            sections: [
                {
                    "heading": "<h2>Cannabis laws in Salzburg – Austria</h2>",
                    "content": "<p>Salzburg has a laid-back attitude toward marijuana. Cannabis is neither totally legal nor entirely illegal, despite this. Simply put, this means that while cannabis is permitted for medical and industrial purposes, it is forbidden for recreational use.Cannabis is forbidden to possess and use. However, it’s possible that the police will only issue you a warning if they find you in possession of a modest amount of marijuana that is intended for personal use.The police may punish you in some circumstances or even refer you to a rehabilitation center. It is forbidden to smoke it in public, so exercise extreme caution if you must.</p>"
                },
                {
                    "heading": "<h2>Where to get marijuana in Salzburg</h2>",
                    "content": "<p>Salzburg’s cannabis culture is sadly not highly developed. Due to the city’s size, it may be challenging for a visitor who doesn’t know any locals to obtain marijuana.You can only search for drug dealers on the streets. But locating them could be difficult as well! Simply have a look around during the evenings or at night in the taverns, stations, or bridges. The parks can also be explored. However, be aware that the quality of the marijuana will be really low, and you might even be taken advantage of.</p>"
                }
            ],
            comments: [
                {
                    name: "john",
                    content: "If you are getting from elsewhere then you need to switch. The great pricing attracted me, but the hospitality of Raz, the quality of weed ( dried and completely cured nugs), the fast delivery and the freebies made this experience amazing.Will definitely come back for sure and I will be a long time customer."
                },{
                    name: "pal",
                    content: "Fast delivery and top notch"
                }
               
              
            ]
        },
        {
            id: 4,
            title: "<h1>Weed in St Aton</h1>",
            img: "/syd.png",
            content: "<p>Wondering where you can buy weed in St Anton? In the Alps, Austria is well-known for its ski resorts. If you enjoy having a good time while being surrounded by nature and participating in exciting outdoor activities, you should consider visiting St. Anton, a small Austrian municipality full of resorts.What could be better than smoking marijuana while skiing and spending time with the people you care about? Buying cannabis in St Anton is easy when you meet the right dealer. </p>",
            sections: [
                {
                    "heading": "<h2>Is Cannabis Legal in St Anton?</h2>",
                    "content": "<p>In accordance to the Addictive Drugs Act, only the Austrian Agency for Health and Food Safety (AGES; overseen by the Austrian Federal Ministries of Labour, Social Affairs, Health, and Consumer Protection, as well as the Austrian Federal Ministry of Agriculture) is permitted to cultivate cannabis for pharmaceutical and related scientific purposes. The same privilege is extended to subsidiaries created for this purpose and in which AGES owns at least 75% of the stock.According to the Austrian Trade Act published by the Federal Ministry of Health, the production, manufacturing, conversion, purchase, and possession of medicinal cannabis needs a particular pharmaceutical production authorization. Disposal is restricted to specific approved receivers and pharmacies..</p>"
                },
                {
                    "heading": "<h2>Where to get marijuana in St Anton</h2>",
                    "content": "<p>It’s possible that buying weed in small tourist communities will be a bit of a hassle.The reason for this is because most people who come with their families are not interested in consuming marijuana.However, you may always ask young people in neighborhood pubs or hotel receptionists for advice. They will most likely have more information and can put you in touch with someone who can assist you. </p>"
                }
            ],
            comments: [
                {
                    name: "james",
                    content: "I have been ordering from Raz over a year now and every single experience has been five stars. Quality customer service combined with an incredible selection of nothing but Top shelf strains. The weed is amazing from the taste, looks and smell. Give these guy a try and see for yourself why he is the best."
                },{
                    name: "williams",
                    content: "If you are getting from elsewhere then you need to switch. The great pricing attracted me..."
                }
               
              
            ]
        },
        {
            id: 5,
            title: "<h1>Weed in graz/h1>",
            img: "/syd.png",
            content: "<p>Get weed in Graz . Graz is Austria’s second-largest city, after Vienna. The city is noted for its well-preserved city center, which is considered one of Central Europe’s most attractive.Graz is also home to six universities with a total student population of about 60,000.The city’s unusual blend of old buildings and student life gives it a distinct vibe that is unlike anything else in the globe. Due to the lenient cannabis laws in Austria and the large number of students, to get cannabis in Graz should not be a problem.</p>",
            sections: [
                {
                    "heading": "<h2>Cannabis laws in Austria</h2>",
                    "content": "In Graz, marijuana remains banned. However, it is still legal to possess a limited amount of marijuana for personal use and for medical purposes. Even though you can grow marijuana plants, as soon as they start to flower, they are automatically made illegal.The decriminalization of cannabis possession for personal use is another amusing aspect of cannabis regulations. However, the police might have to make a referral for you to a treatment facility, or you might have to go to counseling. If you refuse, you will be hauled to court and may be subject to additional penalties, such as paying a fee.</p>"
                },
                {
                    "heading": "<h2>Where to get marijuana in Graz</h2>",
                    "content": "<p>Simply going out and exploring the city is the greatest way to find cannabis in Graz. In parks or on the streets, you will unavoidably run into a lot of smokers and drug dealers. You can just ask someone who is smoking by approaching them. There will be a lot of dealers who appear sketchy as well. If you make eye contact with them, they will typically come over to you.But in all seriousness, this is a bad bargain. Especially if you’re a visitor, you’ll discover cheap marijuana being sold for high costs, $15 or even more. However, if you’re fortunate enough to find a dealer with top-notch marijuana, the pot is of terrible quality and simply not worth it.</p>"
                }
            ],
            comments: [
                {
                    name: "james",
                    content: "I have been ordering from Raz over a year now and every single experience has been five stars. Quality customer service combined with an incredible selection of nothing but Top shelf strains. The weed is amazing from the taste, looks and smell. Give these guy a try and see for yourself why he is the best."
                },{
                    name: "williams",
                    content: "If you are getting from elsewhere then you need to switch. The great pricing attracted me..."
                }
               
              
            ]
        },
        {
            id: 6,
            title: "<h1>Weed in linz</h1>",
            img: "/syd.png",
            content: "<p>Wondering where you can get weed in Linz? Linz may not be Austria’s most populous or popular city, but it has a lot to offer visitors.Although the architecture is comparable to that of Vienna, Linz has a quite different atmosphere.Linz, despite its modest size, is home to a large number of students, which means there is a vibrant nightlife and a variety of activities for young people.Although cannabis is prohibited in Austria, it is nonetheless commonly consumed and very easy to obtain. You’ll have to rely on street dealers if you don’t know anyone in Linz, which can be a pain. Buying cannabis in Linz might sound easy with the right dealer.</p>",
            sections: [
                {
                    "heading": "<h2>Cannabis laws in Austria</h2>",
                    "content": "<p>In accordance to the Addictive Drugs Act, only the Austrian Agency for Health and Food Safety (AGES), which is overseen by the Austrian Federal Ministries of Labour, Social Affairs, Health and Consumer Protection, and Agriculture, is permitted to cultivate cannabis for pharmaceutical and related scientific purposes. The same privilege is extended to subsidiaries established for this purpose and in which AGES owns at least 75% of the shares.According to the Austrian Trade Act published by the Federal Ministry of Health, the manufacture, manufacturing, conversion, purchase, and possession of medicinal cannabis requires a particular license for pharmaceutical production. Disposal is only approved for specific authorized receivers and pharmacies.When it comes to marijuana, the police will be rather laid back. They typically light up some cannabis! However, keep in mind that this varies from officer to officer and person to person. Some police officers could be more harsh than others, while others might only give you a warning.As long as you don’t smoke in the heart of crowded locations or directly in front of the police, it should be acceptable to smoke in public.Be mindful. The police may detain you if you have more than 60 grams on you because they believe you to be a drug dealer. Of course, they might also detain you for smoking a joint. Depending on how they’re feeling.</p>"
                },
                {
                    "heading": "<h2>Where to get marijuana in Salzburg</h2>",
                    "content": "<p>Salzburg’s cannabis culture is sadly not highly developed...</p>"
                }
            ],
            comments: [
                {
                    name: "james",
                    content: "I have been ordering from Raz over a year now and every single experience has been five stars. Quality customer service combined with an incredible selection of nothing but Top shelf strains. The weed is amazing from the taste, looks and smell. Give these guy a try and see for yourself why he is the best."
                },{
                    name: "williams",
                    content: "If you are getting from elsewhere then you need to switch. The great pricing attracted me..."
                }
               
              
            ]
        }
    ]
export default blogs;