const products = [
    {
      id: 1,
      name: "Black Widow",
      img: "/black-widow.webp",
      price: 24,
      quantity: 1,
      details: {
        1: "THC 23%",
        2: "CBD 0.1%",
        3: "Hybrid",
        4: "Sweet, Earthy",
      },
      des: `<p>Black Widow is a hybrid strain that is known for its high THC content and relaxing effects.</p>
  <p>It has a sweet and earthy flavor profile, making it a popular choice among cannabis enthusiasts.</p>
  <p>with chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica</p>`,
    },
    {
      id: 2,
      name: "purple Haze",
      img: "/PurpleHaze_3A.png",
      price: 22,
      quantity: 1,
      details: {
        1: "Tri-coloured buds consisting with dark green, orange and purple hues",
        2: "Sticky trichomes coat each bud inside and out",
        3: "Cross of Purple Thai X Haze strains",
        4: "Strain Graded at AAA",
      },
      des: `<p>Purple Haze is a sativa-dominant strain that is known for its uplifting and euphoric effects.</p>
  <p>It has a sweet and fruity flavor profile, making it a popular choice among cannabis enthusiasts.</p>
  <p>with chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica</p>`,
    },
    {
      id: 3,
      name: "OG Kush",
      img: "/ogkush.jpg",
      price: 18,
      quantity: 1,
      details: {
        1: "Dark lush green nugs with orange and purple notes",
        2: "Cross of Hindu Kush x Chemdawg strains",
        3: "Dense, medium to large sized nugs",
        4: "Strain Graded at AAA",
      },
      des: `<p>OG Kush is a hybrid strain that is known for its high THC content and relaxing effects.</p>
  <p>It has a sweet and earthy flavor profile, making it a popular choice among cannabis enthusiasts.</p>
  <p>with chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica</p>`,
    },
    {
      id: 4,
      name: "White Guava ",
      img: "/popeyes-white-guava.webp",
      price: 22,
      quantity: 1,
      details: {
        1: "Tri-coloured buds consisting with dark green, orange and purple hues",
        2: "Sticky trichomes coat each bud inside and out",
        3: "Cross of Purple Thai X Haze strains",
        4: "Strain Graded at AAA",
        5: "28g",
      },
      des: `<p>White Guava is a potent, 100% pure indica strain celebrated for its mysterious lineage—believed to stem from either a Kush phenotype or a cross between Guava Diesel and White Hashplant.</p>
  <p>This uncertainty only adds to its mystique and appeal. Known for its bold, creeping high, White Guava gradually blankets the body in a calming, euphoric buzz, making it ideal for unwinding after a stressful day.</p>
  <p>Its deeply relaxing effects are perfect for easing tension, promoting sleep, or managing chronic pain. Loved by both medical and recreational users, White Guava is a go-to for those seeking full-body tranquility and peace of mind.</p>`,
    },
    {
      id: 5,
      name: "50mg THC Hemp Seed Oil Capsules",
      img: "/50Mhempseedoil.webp",
      price: 21,
      quantity: 1,
      details: {
        1: "Each capsule contains 50 mg of THC",
        2: "Each bottle contains 3 capsules",
      },
      des: `<p>Introducing our premium THC pills, not to be mistaken for the popular but inferior THC powder capsules.</p>
  <p>Each of these THC pills contains 50 mg of THC in Hemp Seed Oil. Sold in packages of 3, our THC pills offer a natural and convenient way to enjoy the benefits of THC.</p>
  <p>Our THC oil capsules are formulated from the whole Cannabis plant and are rich in terpenes. These capsules contain the highest quality THC and hemp seed oil.</p>
  <p>Hemp seed oil has a 3 to 1 ratio of omega 6 to omega 3, providing the optimum requirements for long term health. All of our THC oil is lab tested to ensure the highest quality and safety.</p>`,
    },  
    {
        id: 6,
        name: "Pure Balance Tinctures – 1000mg CBD",
        img: "/PUREBALNCE_1K_BLUERASPBERRY.png",
        price: 56,
        quantity: 1,
        details: {
          1: 'Designed to nourish and restore',
          2: 'Experience the power of plant-based therapy with Pure Balance',
          3: 'The dropper applicator ensures accurate dosing and absorption',
        },
        des: `Quick Facts
      1000mg CBD / 30ml
      33mg CBD / 1ml
      Ingredients
      Pure Balance Tinctures are made from high-quality, broad-spectrum, cannabinoid-rich hemp-derived extract, combined with all-natural C8 and C10 oils sourced from 100% coconuts to provide powerful medium-chain fatty acids. Added natural food-grade flavoring to enhance the taste.
      Recommended Usage
      For best results, place a half to a full dropper under the tongue, let it absorb for 30 seconds, then swallow. Take once or twice daily, with the option to adjust the serving as desired. Remember to shake well before each use. If you have any concerns or are taking medication, it is critical to consult a healthcare professional before use.
      Supplement Facts
      Serving size: 1/2 Dropper
      Instructions
      Designed for oral consumption. Place under the tongue for the most efficient absorption. Add to food or drink for regular absorption.`
      },
      {
        id: 7,
        name: "Wedding Cake",
        img: "/weddingCake.jpg",
        price: 37,
        quantity: 1,
        details: {
          1: 'Beautiful bright green buds, with undertones of purple and orange',
          2: 'Dense medium-sized nugs are coated in a rich layer of trichomes',
          3: 'Strain Graded at AAA'
        },
        des: `<h2>About Wedding Cake</h2>
      <p>If you prefer Indica-dominant hybrids, you are going to love <strong>Wedding Cake</strong>. With a 70% Indica to 30% Sativa ratio, the strain has been created by crossing Triangle Cookies with Animal Mints, giving it the unique, sweet, earthy, and fruity flavour it is named for. Dive into a blissful experience as Wedding Cake combines the relaxing effects of its Indica lineage with a touch of Sativa’s uplifting qualities. Known for its calming euphoria and therapeutic potential, Wedding Cake is a popular choice for managing stress, anxiety, and pain.</p>
      
      <p>As you can probably guess by its name, Wedding Cake is extremely famous for its delicious, fruity taste and aroma. However, the strain also has high THC levels and is commonly used to treat a number of medical conditions such as depression, stress, anxiety, muscle syndrome, and insomnia.</p>
      
      <h3>Genetics and Flavor Profile</h3>
      <p>Wedding Cake is the result of crossing two renowned strains—Triangle Cookies and Animal Mints. This genetic blend contributes to its distinct, sweet, earthy, and fruity flavor profile. The strain’s name reflects its rich, dessert-like aroma and taste, which combines hints of vanilla, citrus, and a touch of herbal earthiness.</p>
      
      <h3>Therapeutic Potential</h3>
      <p>With its relaxing and mood-enhancing properties, Wedding Cake is a popular choice for managing stress, anxiety, and chronic pain. The strain’s ability to induce a state of calm while simultaneously uplifting the spirits makes it an effective option for those seeking both physical and emotional relief.</p>
      
      <p><strong>Usage:</strong> Wedding Cake can be enjoyed in various forms, including smoking, vaping, or incorporating into edibles. Whether you’re looking for a relaxing evening at home or a way to enhance social gatherings, this strain offers versatility and effectiveness.</p>
      
      <h3>Unique Features</h3>
      <ul>
        <li><strong>Indica-Dominant Hybrid:</strong> With a 70% Indica to 30% Sativa ratio, Wedding Cake provides a well-rounded experience that combines relaxation with a hint of upliftment.</li>
        <li><strong>Distinct Flavor Profile:</strong> Enjoy a sweet, earthy, and fruity taste that reflects its dessert-inspired name.</li>
        <li><strong>Therapeutic Benefits:</strong> Ideal for managing stress, anxiety, and pain, offering both calming and mood-enhancing effects.</li>
      </ul>`
      },
      {
        id: 8,
        name: "Gorilla Zkittlez",
        img: "/Gorilla-skittle.jpg",
        price: 37,
        quantity: 1,
        details: {
          1: 'Beautiful bright green buds, with undertones of purple and orange',
          2: 'Dense medium-sized nugs are coated in a rich layer of trichomes',
          3: '$8.50 – $10 / gram',
          4: 'Strain Graded at AAA'
        },
        des: `Quick Facts
      • Indica-dominant hybrid – 60% Indica to 40% Sativa ratio
      • THC: 20%-24%
      • Cross between Gorilla Glue #4 and Zkittlez strains
      
      Flavour
      The aroma is sweet, exotic, and herbaceous, combining notes of ripe tropical fruit with the taste of exotic hashish.
      
      Effects
      The high level of THC, Gorilla Zkittlez creates a really intense, relaxing, and pleasant effect at the physical level, which helps manage pain and relax, keeping the mind busy in a cloud of psychedelic thoughts.`
      },
      {
        id: 9,
        name: "Super Lemon Haze",
        img: "/super_lemon_haze.jpg",
        price: 29,
        quantity: 1,
        details: {
          1: 'Vibrant buds with dark green, orange, and purple hues',
          2: 'Sticky trichomes coat each bud inside and out',
          3: 'Cross of Lemon Skunk and Super Silver Haze strains',
          4: '$8 – $10 / gram'
        },
        des: `Flavours
      As the name alludes, Super Lemon Haze takes on an incredibly fresh, zesty, lemon-packed aroma that holds true once smoked – leaving a sweet and tart, lemon candy flavor lingering on the palette.
      
      Effects
      Best enjoyed during the daytime hours, Super Lemon Haze provides users with an energetic, mentally uplifting, and stimulating high that allows for hours of increased attention and arousal. Super Lemon Haze will leave each user in a blissfully happy state of mental well-being, crushing anxiety and depression, while also fighting fatigue.
      
      Type of Weed
      Sativa Dominant Hybrid – 80%`
      },
      {
        id: 10,
        name: "Lemon Sour Diesel",
        img: "/lemonsourdieselAA.jpg",
        price: 25,
        quantity: 1,
        details: {
          1: 'Bright green nugs in a blanket of snowy trichomes',
          2: 'Medium to small-sized, sticky buds',
          3: 'Strain Graded at AA',
          4: '$6.95-$7.28/ gram'
        },
        des: `Lemon Sour Diesel is a hybrid strain that is known for its high THC content and energizing effects. It has a citrusy and diesel-like flavor profile, making it a popular choice among cannabis enthusiasts. With chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica.`
      },
      {
        id: 11,
        name: "Love potion",
        img: "/Love-Potion.jpeg",
        price: 37,
        quantity: 1,
        details: {
            1: 'Large, dark green buds with purple undertoness',
            2: 'Sharp, sticky mature trichomes',
            3: '$8.5 – $10 / gram',
            4: 'Strain Graded at AAA'
        },
        des: `
        <h3>Flavour</h3>
        <p>The Love Potion #9 flavor is confusingly delicious – it has a milky sweet cheesy base with a hint of sugary mango and grapefruit upon exhale that sweetens with each smoke. The aroma of Love Potion #9 is just as delightful as you might expect from a strain with such a name. It can be described as a blend of cheese, sweet and sour grapefruit, fresh, rich earth, and spice all rolled into one. The taste is extremely strong, and can even trigger the munchies, so be sure to keep a bowl of snacks close by.</p>
    
        <h3>Effects</h3>
        <p>The Love Potion #9 is an extremely powerful, cannabis-based aphrodisiac. This basically means that the strain will increase the sexual desire, pleasure, and behavior in its users, making it the perfect strain to share with your special someone on nearly all romantic occasions. This is also why this strain shouldn’t be used out in public, lest you fall into a difficult situation.</p>
        <p>At the same time, Love Potion #9 is also so much more. Its sativa roots induce a feeling of intense joy and happiness in its users’ minds, which will leave you feeling relaxed and blissful but won’t affect your energy levels. With time, the strain also turns sedative, so be sure to make use of your intimate time before you find yourself drifting off.</p>
        `,
    },
    {
        id: 12,
        name: "Sour diesel",
        img: "/sour-diesel.jpg",
        price: 75,
        quantity: 1,
        details: {
            1: 'Deep forest green nugs with lots of thin orange hairs',
            2: 'Medium-sized dense nugs, bursting with trichomes',
            3: 'Strain Graded at AAA'
        },
        des: `
        <h3>Flavour</h3>
        <p>Sour Diesel, otherwise known as “Sour D” or “Sour Deez,” is a Sativa-dominant hybrid strain with a (90/10) sativa/indica ratio. The origin of Sour Diesel Marijuana is frequently debated within the marijuana community. Some say it’s a cross between mass super skunk and 91 Chemdog, while others claim that it’s a cross between Mexican sativa and a Chemdog phenotype.</p>
        <p>Either way, you can undoubtedly look forward to a high like no other. Couch lock and a “heavy feeling” aren’t a factor when smoking sour diesel. Instead, you can expect an invigorating cerebral high that opens up doors of creativity.</p>
        `,
    },
    {
        id: 13,
        name: "Gorilla glue",
        img: "/gorilla_glue.jpg",
        price: 44,
        quantity: 1,
        details: {
            1: 'Colourful green nugs with orange hues',
            2: 'Balanced Hybrid with genetics coming from Chocolate Diesel and Sour Diesel',
            3: 'Small to medium sized, dense buds',
            4: 'Strain Graded at AAA'
        },
        des: `
        <h3>Flavour</h3>
        <p>Prepare your taste buds for an explosion of delightful earthy and pine notes, gently infused with hints of fresh lemon zest. Gorilla Glue #4 boasts a rich and robust taste that lingers on the palate, leaving a pleasantly sweet aftertaste to savor. With every inhale, you’ll discover the subtle nuances of its genetic heritage, while the exhale reveals a smooth and soothing essence that soothes the senses.</p>
    
        <h3>Effects</h3>
        <p>Gorilla Glue #4 takes you on a journey of relaxation and euphoria. Its Indica dominance brings forth a soothing and calming sensation, melting away stress and tension. Meanwhile, the Sativa influence elevates your mood, inducing a sense of happiness and bliss that brightens your outlook on life. Discover the extraordinary effects of Gorilla Glue #4, an exquisitely balanced cannabis strain that combines the best of both worlds with its 60% Indica and 40% Sativa genetics.</p>
        `,
    },
    {
        id: 14,
        name: "Blackberry zkittlez",
        img: "/bbz.jpg",
        price: 44,
        quantity: 1,
        details: {
            1: 'Shimmering nugs with bright purple and orange hues',
            2: 'Indica Dominant hybrid with genetics from Blackberry and Zkittlez strains',
            3: 'Medium to large dense buds',
            4: '$9 – $12 / gram'
        },
        des: `
        <h3>Flavour</h3>
        <p>Experience a symphony of flavors and effects with our Blackberry Skittles cannabis strain. Combining the fruity sweetness of blackberries with the vibrant zest of Skittles candy, this hybrid strain offers a tantalizing journey for the senses.</p>
    
        <h3>Quick Facts</h3>
        <ul>
            <li>Indica Dominant Hybrid – 70% Indica / 30% Sativa</li>
            <li>THC: 24-32%</li>
            <li>Cross between Blackberry and Zkittlez strains</li>
        </ul>
    
        <h3>Aroma</h3>
        <p>Delight your senses with the tantalizing aroma of Blackberry Skittles, which fills the air with notes of sweet berries and hints of tangy citrus. The fragrance is reminiscent of a fruit-filled paradise, inviting you to indulge in its intoxicating allure.</p>
    
        <h3>Genetics and Potency</h3>
        <p>Blackberry Skittles is a well-balanced hybrid strain, carefully bred to combine the best traits of its parent strains. With moderate to high THC levels, this strain offers a euphoric and uplifting high, accompanied by a gentle sense of relaxation that soothes both body and mind.</p>
        
        <h3>Flavour</h3>
        <p>The first thing you’ll notice is the captivating aroma of ripe blackberries, tantalizing your senses and setting the stage for what’s to come. As you take your first inhale, a burst of sweet and fruity notes dances on your taste buds, reminiscent of freshly-picked blackberries with a hint of tropical zest. But that’s not all – as the smoke unfolds, a subtle undertone of sugary candy emerges, adding a playful twist to the overall experience.</p>
    
        <h3>Effects</h3>
        <p>If the wide range of flavour wasn’t enough to satiate your desire for variety, the Blackberry Zkittlez buzz has you covered! Your body and your mind will have two completely different experiences here, yet they’ll work together to produce a euphoric high.</p>
        <p>The full-body effects from this high THC (well over 20%) cannabis strain will relax the muscles and the joints, removing the stresses of the day, while the cerebral, happiness-inducing head high will ensure you don’t drift off to sleep immediately, and instead enjoy a creative mindset conducive with meaningful conversation and jokes for days!</p>
        `,
    },    
    {
      id: 16,
      name: "Nepalese hash",
      img:"/nepalesehash.webp",
      price: 37,
      quantity: 1,
      details: {
        1: 'Nepalese hash',
        2: 'Dark Brown, almost black in appearance',
        3: 'Sticky, Resinous, Glossy, yet soft & malleable',
        4: 'THC 40-60%'
      },
      des: `
        <p>Nepalese Temple Hash is an exotic and potent form of hashish, renowned for its sticky texture, sweet taste, and the dream-like high that it provides. These cream-like spheres are increasingly rare, with demand outpacing supply among enthusiasts of this unique hash variety. Users report a spectrum of effects from smoking Nepalese Temple Balls, ranging from deep relaxation and joy to a more uplifted and energetic state.</p>
        <p>Hand-Pressed Perfection<br>
        Unlike machine-pressed hashish, Nepalese Hash undergoes a meticulous hand-pressing process. This hands-on approach ensures that every batch retains its soft, flexible texture and preserves the integrity of its flavors and aromas. With each puff, you’ll savor the rich and complex profile unique to Nepalese hashish, elevating your cannabis experience to new heights.</p>
        <p>A Legacy of Excellence<br>
        The original Nepalese Temple Balls were traditionally used in spiritual ceremonies and rituals, revered for their meditative and calming properties. They are made from the finest cannabis plants grown in the high altitudes of the Himalayas, where the unique climate and soil conditions produce resin-rich strains. The craftsmanship behind each temple ball is unparalleled, resulting in a product that is both highly potent and deeply aromatic, with earthy, woody notes complemented by subtle spicy undertones.</p>
        <p>Effects<br>
        When consumed, Nepalese Temple Hash provides a smooth, long-lasting high that is deeply relaxing and introspective, perfect for unwinding or engaging in creative and contemplative activities. The full-spectrum nature preserves the plant’s rich cannabinoid and terpene profiles, delivering a balanced and complex experience that enthusiasts appreciate for its authenticity.</p>
      `,
    },
    {
      id: 17,
      name: "Purple Haze",
      img:"/PurpleHaze_3A.png",
      price: 22,
      quantity: 1,
      details: {
        1: 'Tri-coloured buds consisting with dark green, orange and purple hues',
        2: 'Sticky trichomes coat each bud inside and out',
        3: 'Cross of Purple Thai X Haze strains',
        4: 'Strain Graded at AAA'
      },
      des: `
        <p>Purple Haze is a sativa-dominant strain that is known for its uplifting and euphoric effects. It has a sweet and fruity flavor profile, making it a popular choice among cannabis enthusiasts. With chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica.</p>
      `,
    },
    {
      id: 18,
      name: "100mg THC Hemp Seed Oil Capsules",
      img:"/25Mhempseedoil.webp",
      price: 38,
      quantity: 1,
      details: {
        1: 'Each capsule contains 100 mg of THC',
        2: 'Each bottle contains 3 capsules',
      },
      des: `
        <p>The THC 100mg Hemp Seed Oil Capsules – CO2 represent a high-quality, convenient way to enjoy the benefits of the cannabis plant without the need for smoking or vaping. These capsules, enriched with THC oil and derived from premium hemp seed oil, offer a balanced blend of health benefits and controlled THC dosing. Designed for both new users and experienced consumers, these THC pills provide a potent dose that’s easy to integrate into daily routines.</p>
        <p>Flavor and Ease of Use<br>
        While most THC products come with distinctive flavors, these capsules are flavor-neutral, making them ideal for users sensitive to the earthy or herbal taste of cannabis. Encapsulated in an easy-to-swallow format, they’re discreet and portable, allowing you to take your THC oil supplement wherever and whenever you need it without the aftertaste commonly associated with other cannabis products.</p>
        <p>Effects<br>
        The effects of THC 100mg Hemp Seed Oil Capsules provide a reliable experience due to their controlled dosing and premium extraction methods. Here’s what users can typically expect:</p>
        <ul>
          <li>Euphoric Sensation: The capsules deliver a mild, uplifting euphoria, helping to enhance mood and elevate your mental state.</li>
          <li>Relaxation: The THC in these capsules aids in muscle relaxation, offering relief from physical tension and stress.</li>
          <li>Focused Calm: Users report a sense of calm and focus, making it easier to unwind or focus on creative tasks.</li>
        </ul>
        <p>Due to the slow release of THC in capsule form, effects are gradual and consistent, ideal for those seeking steady support throughout the day.</p>
        <p>Benefits<br>
        Beyond the pleasant effects, these THC pills from the cannabis plant also offer a wide range of health benefits, including:</p>
        <ul>
          <li>Pain Relief: The anti-inflammatory properties of THC oil help relieve chronic pain, making these capsules beneficial for individuals with arthritis, back pain, and more.</li>
          <li>Sleep Support: For those struggling with insomnia, the relaxing effects of these capsules can support deeper, more restful sleep.</li>
          <li>Anxiety and Stress Reduction: With a calming impact, these capsules can help reduce anxiety and promote an overall sense of well-being.</li>
        </ul>
      `,
    },
    {
      id: 19,
      name: "Viridesco Sea Warp Honey Oil – 5ml",
      img:"/viridesco-oil-SEA-WARP-5ml.webp",
      price: 153,
      quantity: 1,
      details: {
        1: '• Full-spectrum extract that has been finely filtered to create a premium clear and pure oil',
        2: 'Balanced hybrid',
        3: 'Independently tested at MB labs',
      },
      des: `
        <p>This honey oil is made from SeaWarp that was grown in Beautiful British Columbia. SeaWarp is a perfectly balanced hybrid bred in BC. It has a sweet flavor and aroma with herbal pine-like tones. It starts with a euphoric, cerebral and mentally uplifting head buzz that eventually paired with a calming body stone that eases all your nerves and melts away any aches or pains.</p>
        <p>This high-end vaping oil has been independently tested at MB labs to contain over 80.3% THC. This product has been determined to be a 50:50 hybrid.</p>
      `,
    },
    {
      id: 20,
      name: "QNTM Clouds Gold THC Vape Liquid Strawberry – 1000mg",
      img:"/qntm-cloud-gold-strawberry.webp",
      price: 72,
      quantity: 1,
      details: {
        1: '1000mg THC potency',
        2: 'Delicious flavours',
      },
      des: `
        <p>Discover a new realm of vaping with QNTM Clouds Gold THC Vape Liquid in Strawberry flavor. Specially formulated for those who seek both enjoyment and therapeutic benefits, this premium vape liquid offers a delightful experience that satisfies your cravings while delivering the potent effects of THC. With 1000mg of high-quality THC, QNTM Clouds is designed to elevate your vaping experience to new heights.</p>
        <p>Flavor Profile<br>
        The Strawberry flavor of QNTM Clouds is a delightful explosion of sweet, succulent berries. Each puff transports you to a sun-kissed strawberry field, delivering an authentic taste that lingers on your palate. The carefully crafted blend ensures that the sweetness is perfectly balanced, making it ideal for both seasoned vapers and newcomers alike.</p>
        <p>Effects<br>
        When you indulge in QNTM Clouds Gold THC Vape Liquid, you can expect an array of effects that cater to various needs:</p>
        <ul>
          <li>Euphoria: Experience a blissful uplift in mood, perfect for unwinding after a long day.</li>
          <li>Relaxation: The calming properties of THC help soothe anxiety and stress, allowing you to achieve a sense of tranquility.</li>
          <li>Creativity: Many users report enhanced creativity and focus, making it an excellent choice for artistic pursuits or brainstorming sessions.</li>
        </ul>
        <p>Benefits<br>
        Using QNTM Clouds Gold THC Vape Liquid offers several advantages:</p>
        <ul>
          <li>Fast-acting: Vaping provides quick relief, as the THC is rapidly absorbed into your bloodstream.</li>
          <li>Convenient: The compact design makes it easy to carry, allowing you to enjoy your favorite flavor anytime, anywhere.</li>
          <li>Precise Dosage: Each 1000mg bottle ensures you know exactly how much THC you are consuming, helping you control your intake effectively.</li>
          <li>Discreet: The subtle aroma and vapor make it easy to enjoy without drawing unwanted attention.</li>
        </ul>
      `,
    },
    {
      id: 21,
      name: "Zigzag hash",
      img:"/ZigZagHash.webp",
      price: 72,
      quantity: 1,
      details: {
        1: 'Light brown with dark undertones',
        2: 'Crumbly, easy to work with texture',
        3: 'Spicy notes',
        4: '$10-$14/gram'
      },
      des: `
      <h3>Facts about Zigzag hash<h3>
        <p>Hashish is produced practically everywhere in and around Afghanistan. The best kinds of cannabis Hash in Afghanistan originate from the Northern provinces between Hindu Kush and the Russian border (Balkh, Mazar-i-Sharif).
The plants which are used for Hash production are very small and bushy Indicas. In Afghanistan Hashish is pressed by hand after the addition of a small quantity of tea or water. The Hashish is worked on until it becomes highly elastic and has a strong aromatic smell.
This Moroccan style hash produces a cerebral and active high.
</p>
        <h3>Appearance and Texture<h3>
       <p>This hash exhibits a rich brown color, indicative of its purity and traditional processing methods. Its soft and malleable texture allows for easy handling and preparation, making it suitable for various consumption methods.</p>
       <h3>Aroma and Flavor<h3>
        <p>Zig Zag Hash is celebrated for its strong, delightful aroma that becomes more pronounced when gently heated. Users have noted that it crumbles to a perfect consistency for pipe use, releasing a flavor that matches its enticing scent.</p>
        <h3>Effects and Potency<h3>
     <p>This hash delivers a cerebral and invigorating high, providing uplifting yet relaxing effects. It’s known for inducing euphoria, contentment, and relaxation, making it suitable for both recreational and medicinal use. Some users have found it effective in alleviating conditions such as depression and ADHD.</p>
      `,
    },
   
    
]
export default products;