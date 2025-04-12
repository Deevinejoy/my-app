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
      name: "White guava ",
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
        img: "/WeddingCake.jpg",
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
        img: "/Gorilla-Skittle.jpg",
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
        img: "/BBZ.jpg",
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
      img:"/Nepalesehash.webp",
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
    {
      id: 22,
      name: "VIRIDESCO-RSO",
      img:"/viridesco-rso-kali-mist-5ml.webp",
      price: 72,
      quantity: 1,
      details: {
        1: 'Full product description below',
        2: 'shipping FREE for orders over $149'
       
      },
      des: `
      <h3>About VIRIDESCO- Pink Kush RSO
VIRIDESCO PINK KUSH RSO 2ML, 5ML, & 10ML
<h3>
        <p>This oil is made from Pink Kush flowers grown on Vancouver Island, in beautiful British Columbia!
</p>
        <h3>Appearance and Texture<h3>
       <p>Creating super-strong body effects and a sweet and delicate taste, Pink Kush is a 90% Indica-dominant hybrid with a little bit of a coy attitude. Almost good enough to eat, the flavor and odor are heavily accented with vanilla, sweet berries, and floral notes that linger in your mouth in a pleasing way. When it comes to getting high, Pink Kush brings relaxation with a twist of happy giggles. Users will find that they are instantly taken to a euphoric headspace, as even the potential of a negative thought is far from the mind.
This high-end VIRIDESCO– Pink Kush RSO has been independently tested at MB labs to contain over 74.51% cannabinoids, including 70% THC!
We have determined that this product is 90% Indica.
</p> `,
    },
    {
      id: 23,
      name: "Revival CBD",
      img:"/CBD-Oil.webp",
      price: 56,
      quantity: 1,
      details: {
        1: '1000mg CBD : 250mg THC',
        2: '33mg CBD : 8mg THC per 1ml',
           },
      des: `
      <h3>About 4:1 CBD:THC 1000mg CBD/250mg THC - Revival CBD<h3>
        <p>Our 4:1 tinctures are made using isolated THC and CBD – combining the two cannabinoids to encourage the Entourage Effect.
</p>
      
       <p>Our Premium tinctures come in a 30ml jar with an easy to use droplet applicator that allows for precise and controlled doses every time. Tinctures can be administered in a variety of ways and offer a discreet way for people to medicate. Oil can be taken sublingually, by applying the tincture underneath the tongue and holding it for at least 60 seconds to allow for absorption by the sublingual artery under the tongue.
Enhance your favorite foods and drinks with Revival CBD tinctures, ideal for those seeking prolonged effects. Remember, heat can diminish cannabinoids, so incorporate your dose into your meal or beverage just before serving.
Formulated from the whole cannabis plant extract. We added all natural MCT oil (medium-chain triglyceride) that allows for quick uptake and helps to keep both the mind and body operating at peak performance.
</p>
       <h3>Ingredients:<h3>
        <p>• CBD and THC Extracts
•	MCT Oil
•	Natural Flavouring
</p>
     <p>Suggested Usage: Take 1-2 droppers every 3-4 hours, drop under tongue and hold for 30 seconds for maximum relief. Consult a physician for appropriate dosing.</p>
      `,
    },
    {
      id: 24,
      name: "Viridesco RSO – Sativa – Kali Mist",
      img:"/viridesco-rso-kali-mist-5ml.webp",
      price: 65,
      quantity: 1,
      details: {
        1: 'Main purpose is to improve your mood, creativity, and relax your body and mind',
        2: 'If you have depression or anxiety, then this concentrate should calm you down immediately.',
        3: 'Effects are mellow and soothing, rather than aggressive and impulsive',
        4: 'Independently tested at MB labs'
      },
      des: `
      <h3>About Viridesco RSO - Sativa - Kali Mist<h3>
        <p>Viridesco RSO Sativa Kali Mist combines the renowned benefits of Rick Simpson Oil (RSO) with the energizing effects of the legendary Kali Mist strain. Known for its purity and effectiveness, this RSO oil offers users a clean, uplifting experience typical of high-quality Sativa hybrids. Whether for daily wellness routines or occasional relief, Viridesco RSO Sativa Kali Mist is an excellent choice for those seeking a potent, natural supplement.
</p>
        <h3>Flavor Profile<h3>
       <p>With Viridesco RSO Sativa Kali Mist, users can expect a taste that is both earthy and subtly spicy, capturing the essence of the original Kali Mist strain. Here’s what to look forward to in its flavor:
•	Earthy Undertones: Each dose has a grounding earthiness, delivering a natural and pleasant flavor.
•	Hints of Spice: The subtle spiciness adds complexity, enhancing the overall taste profile.
•	Smooth Finish: Its smoothness on the palate makes it easy for users to consume and enjoy.
This unique combination of earthy and spicy notes makes Viridesco RSO Sativa Kali Mist an enjoyable and satisfying choice.
</p>
       <h3>Effects<h3>
        <p>The effects of Viridesco RSO Sativa Kali Mist are characteristically uplifting, making it a great option for daytime use. Here’s what users can typically expect:
•	Energizing High: As a Sativa hybrid, this RSO oil provides an energizing high that can increase focus and mental clarity.
•	Creativity Boost: Many users report enhanced creativity and problem-solving abilities.
•	Mild Relaxation: Alongside its energizing effects, it also offers a balanced sense of calm, helping to ease any residual stress or tension.
The blend of energy and relaxation makes it ideal for those who want to stay productive and alert throughout the day.
</p>
        <h3>enefits<h3>
     <p>Viridesco RSO Sativa Kali Mist is more than just an energizing oil; it also has numerous wellness benefits:
•	Pain Relief: Known for its effectiveness in pain management, this RSO oil may help reduce chronic discomfort.
•	Mood Support: The uplifting effects make it helpful for those struggling with mood imbalances or lethargy.
•	Natural Anti-Inflammatory: RSO oils like this one have been valued for their anti-inflammatory properties, supporting overall wellness.
These benefits make it a versatile option for users seeking both relief and enhancement of their daily wellness.
</p>
      `,
    },
    {
      id: 25,
      name: "Nebula Shatter -Top shelf",
      img:"/Shatter-Nebula-1.webp",
      price: 23,
      quantity: 1,
      details: {
        1: 'Golden',
        2: 'More description below',
      },
      des: `
        <p>Nebula, meaning “Starcloud” as it has been known to “twinkle” with THC coating, is an award-winning Balanced Hybrid (50% Indica / 50% Sativa) strain. The Nebula marijuana strain was bred by Paradise Seeds in 1996 and is a cross between a US Haze and Master Widow. Nebula has many accolades to its name including the 2005 Copa La Bella Flor Spain. Other honorable mentions are the 3rd place in High Times Cannabis Cup of 1999 and the runner-ups in 2005. It also clinched 3rd position in the 2004 Highlife Cup.
</p>
      `,
    },
    {
      id: 26,
      name: "Tesla Hash",
      img:"/TESLA_HASH.webp",
      price: 14,
      quantity: 1,
      details: {
        1: 'Tesla Hash has a strong, pungent aromatics,',
        2: 'Made from 100% Indica landrace strains',
        3: 'Provides a smooth, mellow smoking experience',
        4: '$10-$14/gram'
      },
      des: `
      <h3>About Tesla Hash<h3>
        <p>Tesla Hash is a premium hash originating from Afghanistan, where the cultivation of hashish has become a cultural norm and time-honoured tradition. The finest quality hash comes from the Northern provinces of Afghanistan, in the harsh mountainous regions. Although the devastating nature of the uninhabitable mountain regions may seem almost un-survivable, they are home to many indica landrace strains.
These special cannabis strains develop many traits that allow them to survive the harshness of Afghanistan’s mountains, such as increased trichome production, making these specific strains very coveted for hash production. Tesla Hash is one of the many regional variants of hash available, differentiating itself from the others with its’ impressive THC concentration that ranges around 40-50%, providing users with a powerful buzz that is both euphoric and relaxing.
Tesla Hash is imbued with the earthy, spicy and pine-like notes of the indica landrace strains Afghanistan has to offer. The smoke is smooth, mild and reminiscent of old-school hash with its’ relaxing body high and sedating nature.
If you apply a little bit of heat, it will become more malleable and easier to work with.
There are a few ways in which one can consume this product:
– Crumble up & sprinkle into a joint
– Smoke out of a pipe/bong/hookah
– Smoke using a one-hitter
Hash, or Hashish, is a concentrate made from the resin of the cannabis plant. It is consumed by inhaling from a small piece, typically in a pipe, bong, vaporizer or joint, or via oral ingestion (after decarboxylation). As pure hashish will not burn if rolled alone in a joint, it is typically mixed with herbal cannabis, tobacco or another type of herb for this method of consumption.

</p><h3>Effects and Potency<h3>
     <p>Users of Tesla Hash often experience a smooth, mild smoke that induces strong sedative and relaxing effects, reminiscent of traditional hashish.
These calming properties make it suitable for alleviating stress, anxiety, and promoting restful sleep. Additionally, it may help stimulate appetite and provide relief from chronic pain and headaches.
</p>
      `,
    },
    {
      id: 27,
      name: "BLISS Edibles 375mg THC Tropical",
      img:"/BLISS_Tropical_NEW.webp",
      price: 22,
      quantity: 1,
      details: {
        1: 'One bite-size away from paradise with our Tropical Assorted Gummies.',
        2: 'Each gummy contains a precise dose of THC, coupled with a burst of mouthwatering natural flavor.',
        3: 'Pop one of these easy-to-dose treats any time of the day.',
      },
      des: `
      <h3>About BLISS Edibles 375mg THC Tropical<h3>
        <p>Escape to a state of bliss with our Tropical Assorted THC Gummies. Crafted to perfection, each gummy offers a precise dose of THC, paired with mouthwatering natural flavors. Get ready to experience paradise in every bite.
</p>
        <h3>Key Features:<h3>
       <p>
•	Blissful THC Infusion: Indulge in the euphoric experience of our Tropical Assorted Gummies, each infused with a precise dose of THC for ultimate relaxation.<br>
•	Potency & Variety: Enjoy 15 pieces of cannabis gummies, with each piece packing a punch of 25mg THC, totaling 375mg THC per package.<br>
•	Delicious Assortment: Treat your taste buds to a burst of natural flavors, including Blue Raspberry, Pineapple, and Watermelon, in every delectable gummy.<br>
</p>
       <h3>Dosage and Safety Tips:<h3>
        <p>Always start small with THC dosing (25mg THC or less) to gauge your tolerance. Effects may take 15 minutes to 2 hours to kick in, so exercise patience and wait for full manifestation before consuming more.</p>
       `,
    },
    {
      id: 28,
      name: "BLISS Edibles 375mg THC Party Mix",
      img:"/BLISS_PartyMix_NEW_2a.webp",
      price: 22,
      quantity: 1,
      details: {
        1: 'Our Party Mix Gummies is your fast-track ticket to a fiesta..',
        2: 'Infused with THC and crafted for a juicy delight in every bite, you can kick back, relax, and remember the good times with these Party Mix gummies..',
    
      },
      des: `
      <h3>About BLISS Edibles 375mg THC Party Mix<h3>
        <p>Satisfy your cravings with Bliss Edibles Party Mix Gummies, your one-stop destination for premium cannabis infused treats. Elevate your experience with our precisely dosed gummies bursting with natural flavors.
</p>
        <h3>Key Features:<h3>
       <p>•	Perfect Dosage: Each gummy contains 25mg of THC, ensuring a consistent and enjoyable experience every time.<br>
•	Variety Pack: Indulge in a mix of mouthwatering flavors including Peach, Green Apple, and Grape, for a delightful treat that suits any palate.<br>
•	Convenient Packaging: With 15 pieces per package and a total of 375mg THC, our gummies offer convenience and value in every bite.
</p>
        <h3>Safety First:<h3>
     <p>Always start with a low dosage (25mg THC or less) and wait at least 2 hours before consuming more to gauge your tolerance. Remember, the effects of edibles can vary, so it’s essential to consume responsibly.</p>
      `,
    },
    {
      id: 29,
      name: "2000mg Gummy – Atomic Wheelchair",
      img:"/gummy.jpg",
      price: 65,
      quantity: 1,
      details: {
        1: 'Sweet with a coating of sugar crystal',
        2: 'Strong with enough THC to melt you into nonexistence',
      
      },
      des: `
      <h3>About 2000mg Gummy - Atomic Wheelchairh<h3>
        <p>Delight in our oversized THC gummy, meticulously crafted for maximum enjoyment and customizable dosing. With evenly scored edges, each puck delivers ten (10) triangular pieces, ensuring precise, consistent doses.
</p>
        <h3>Key Features:<h3>
       <p>•	Precision Dosing: Designed for convenience, our gummy pucks offer ten (10) equal doses, allowing you to tailor your experience to your preference and tolerance level.<br>
•	Potent Formulation: Crafted with highly concentrated full-spectrum cannabis oil, our gummies pack a powerful punch of THC, delivering potent effects with each delectable bite.<br>
•	Consistency and Quality: Our commitment to consistency, potency, and effectiveness guarantees dependable results every time, ensuring a reliable and enjoyable experience.
</p>
       <h3>How Much Should I Take?<h3>
        <p>Determining the right dosage depends on factors like body mass, fitness level, and individual body chemistry. For seasoned users, 100mg is a recommended starting point, with our packaging facilitating easy portioning at these increments. Allow 60 to 90 minutes for the effects to take hold after consumption.</p>
        <h3>Ingredients:<h3>
     <p>Our gummies feature a blend of premium ingredients, including organic cane sugar, glucose syrup, pectin, natural fruit juice, citric acid, natural flavors, sunflower lecithin, modified cornstarch, and cannabis extract.</p>
      `,
    },
    {
      id: 30,
      name: "QNTM Clouds Gold THC Vape Liquid Tangerine ",
      img:"/qntm-cloud-gold-tangerine.webp",
      price: 72,
      quantity: 1,
      details: {
        1: '1000mg THC potency',
        2: 'Delicious flavours',
        3: 'Spicy notes',
        4: '$10-$14/gram'
      },
      des: `
      <h3>About QNTM Clouds Gold THC Vape Liquid Tangerine - 1000mg<h3>
        <p>Elevate your vaping experience with QNTM Clouds brand’s Gold THC Vape Liquid Tangerine, boasting a potent 1000mg formulation. Immerse yourself in the tangy zest of tangerine, crafted to perfection for unparalleled satisfaction.
QNTM Extracts new line of Clouds Gold THC vape juice.
New formula with Organic MCT oil, proprietary natural flavouring extracts (Tangerine), and THC Distillate.
Every 10mL bottle contains 1000mg of THC, just put it into your e-cig tank for a smooth and flavourful smoke. Medicated discreetly, as the smoke doesn’t smell like bud, just fruity.

</p>
     <br>
     <p>Works with Vapes from 10watts to 75watts.<br>
Not compatible with Vape Pens with a 510 thread battery (i.e., Sky Extracts, Sovrin, etc). Juice only, hardware not included.<br>
Separation is normal, shake well before use.
</p>
      `,
    },
    {
      id: 31,
      name: "Cherry Sativa Jelly Bombs",
      img:"/Twisted-Extract-cbd.jpg",
      price: 15,
      quantity: 1,
      details: {
        1: 'Great way to get a mood lift during the day, spark up some creativity, and enhance your focus',
        2: 'Made using a BC grown, high quality sativa cannabis strain.',
     
      },
      des: `
      <h3>About Cherry Sativa Jelly Bombs - Twisted Extracts<h3>
        <p>Wherever your happy place is, Twisted Extracts Sativa Jelly Bombs will take you there. They’re great for many uses like sparking creativity (feel like Bob Ross), unwinding from the day (enhancing your binge-watching Netflix abilities), and making you feel like a kid again (regardless of how long it’s been).
</p>
      
       <p>Effects: Euphoric, Energetic, Uplifted, and Creative.<br>
Each Jelly Bomb is infused with 80 mg of THC derived from a Sativa-dominant cannabis strain (8 x 10 mg THC servings each).
</p>
    
        <p>All Twisted Extracts gummies are lab-tested and hand wrapped for quality assurance purposes.<br>
Ingredients: Sugars (corn syrup, sugar from beets), Water, Gelatin, Citric acid, Natural and artificial flavours, Pectin, Coconut oil, Canola oil, Cannabis extract, Carnauba wax, FD&C Blue #1, FD&C Yellow #5.<br>
Disclaimer: Cannabis affects all people differently based on factors like genetics, physiology and lifestyle. How an edible affects others may not affect you in the same way.
Side effects may include: giggle fits, spontaneous interpretive dance, and getting along unusually well with your family members.<br>
Please be advised that due to circumstances that are out of our control, due to the warmer weather during summer, We are not liable should product melt during transport, this does not change or decrease product potency or effect.
</p>`,
    },
    {
      id: 32,
      name: "250mg THC infused Milk Chocolate",
      img:"/choco.webp",
      price: 18,
      quantity: 1,
      details: {
        1: 'The king of chocolate',
        2: 'Made from the best ingredients in the world, delicious unexpected symbiosis of components and respect from chocolatiers.',
        3: 'Each bar contains 250mg THC | Each individual square contains 16.6mg THC.',
        4: 'CONTAINS: Dairy, soy and tree nuts. MAY CONTAIN: Traces of wheat.'
      },
      des: `
      <h3>About 250mg THC infused Milk Chocolate - Adorable<h3>
        <p>Indulge in the perfect blend of rich, creamy milk chocolate and premium THC with Adorable’s 200mg THC-Infused Milk Chocolate. Designed for both new and experienced users, this delectable treat offers a smooth, delicious way to enjoy the effects of cannabis while satisfying your sweet tooth.
</p>
        <h3>Why Choose Adorable THC-Infused Milk Chocolate?<h3>
       <p>✔ Premium Quality Ingredients – Made with high-grade milk chocolate and infused with top-quality THC extract for a consistent and enjoyable experience.<br>
✔ Precisely Dosed – Each bar contains 200mg of THC, making it easy to portion and customize your experience.<br>
✔ Discreet & Convenient – A delicious, hassle-free way to enjoy cannabis without the need for smoking or vaping.<br>
✔ Long-Lasting Effects – Experience deep relaxation, euphoria, and stress relief with this edible’s slow-releasing benefits.
</p>`,
    },
    {
      id: 33,
      name: "Golden Teacher",
      img:"/GoldenTeacher.jpg",
      price: 9,
      quantity: 1,
      details: {
        1: 'Cap. An ashy red color, with a yellow or golden center, hence the “golden” in the name.',
        2: 'Stipe. Hollow and thicker toward the base',
        3: 'Gills. Vary from whitish to purple-brown.',
     
      },
      des: `
      <h3>About Golden Teacherh3>
        <p>The Golden Teacher magic mushroom strain is a favourite among cultivators and psychonauts for years. It’s a favourite amongst psychonauts worldwide for its profound psychedelic journey. They are best known for their shamanistic properties, or spiritual effects rather than solely “tripping”, and moderate levels of psilocybin and psilocin. The shining golden caps and wise teachings give this mushroom its rightful name.
Consuming Golden Teachers will give a feeling of enlightenment. They will help you connect with nature. Amazing ability to heal the mind and spirit. These psychedelic magic mushrooms are for both beginners and veterans.
</p>
        <h3>Dosage Guide<h3>
       <p>•	Micro: 0.25 gram<br>
•	Low: 0.25 – 1 gram<br>
•	Medium: 1 – 2 gram<br>
•	Strong: 2.5 – 5 gram<br>
•	Heavy: 5 gram and upwards
</p>
      `,
    },
    {
      id: 34,
      name: "Blue Meanie",
      img:"/mushrooms-blue-meanie.jpg",
      price: 10,
      quantity: 1,
      details: {
        1: 'Visual characteristics include medium / large fruiting bodies',
        2: 'Thick, dense stalks and a golden caramel to tan, often white speckled cap',
      },
      des: `
      <h3>About Blue Meanie<h3>
        <p>Blue Meanie is a potent strain of Psilocybe cubensis known for its exceptional psychedelic properties. Popular among mushroom enthusiasts, it offers a unique experience that combines visual stimulation with a deep sense of euphoria.
</p>
        <h3>Effects<h3>
       <p>•	Strong visuals, including vibrant colors and patterns<br>
•	Euphoric sensations and heightened mood<br>
•	Altered sense of time and space<br>
•	Enhanced creativity and introspective thinking<br>
</p>
       <h3>Benefits<h3>
        <p>•	May aid in mood improvement<br>
•	Potential to support mental clarity <br>
•	Can foster deep self-reflection <br>
•	Might help in reducing stress and anxiety <br>
</p>`,
    },
    {
      id: 35,
      name: "Spore Wellness (Cognitive) Microdosing shroom Capsules",
      img:"/Spore-Wellness-Cognitive.webp",
      price: 60,
      quantity: 1,
      details: {
        1: 'Each bottle of SWC contains 25 capsules (500mg per capsule)',
        2: 'Vegan and gluten free',},
      des: `<h3>About Spore Wellness (Cognitive) Microdosing Mushroom Capsules
<h3>
        <p>Discover a new realm of mental clarity and creativity with Spore Wellness Cognitive Microdosing Mushroom Capsules. These meticulously crafted capsules are designed for those looking to enhance their cognitive function, creativity, and overall well-being. Utilizing the natural power of psilocybin mushrooms, these capsules offer a controlled way to experience the benefits of microdosing without the overwhelming effects of traditional dosages.
</p>
        <h3Flavor Profile<h3>
       <p>While the flavor of the capsules themselves is neutral, the essence of the mushrooms encapsulated within carries an earthy undertone typical of high-quality psilocybin varieties. Users can enjoy the benefits without any unpleasant tastes, making it a convenient and pleasant way to incorporate microdosing into daily routines. Each capsule is easy to swallow, ensuring a hassle-free experience for everyone..</p>
       <h3>Effects<h3>
        <p>Spore Wellness Cognitive Microdosing Capsules are designed to deliver subtle yet impactful effects that enhance mental clarity and focus. Users often report:<br>
•	Increased Creativity: Many find that microdosing can unlock new avenues of thought, encouraging innovative ideas and artistic expression.<br>
•	Enhanced Focus: Experience improved concentration and the ability to tackle tasks with greater efficiency.<br>
•	Mood Elevation: Microdosing can lead to an uplifted mood, promoting a sense of well-being and positivity throughout the day.<br>
•	Mindfulness: Users often experience a heightened sense of awareness and presence, making everyday tasks feel more meaningful.
</p>
        <h3Benefits<h3>
     <p>Incorporating Spore Wellness Cognitive Microdosing Mushroom Capsules into your routine can yield numerous benefits, including:<br>
•	Improved Cognitive Function: Support brain health and enhance your mental performance.<br>
•	Stress Reduction: Experience a calming effect that helps alleviate anxiety and promotes relaxation.<br>
•	Holistic Wellness: Embrace a natural approach to mental health, aligning with the growing trend of holistic health solutions.
</p>`
    },
    {
      id: 36,
      name: "Spore Wellness (Essential) Microdosing shroom Capsules",
      img:"/SPOREWELLNESS_Essential.webp",
      price: 60,
      quantity: 1,
      details: {
        1: 'Each bottle of SWC contains 25 capsules (100mg per capsule)',
        2: 'Vegan and gluten free',

      },
      des: `
      <h3>About Spore Wellness (Essential) Microdosing Mushroom Capsules<h3>
        <p>Discover a new realm of wellness with Spore Wellness Essential Microdosing Mushroom Capsules. Each capsule is meticulously crafted to deliver the perfect dose for a transformative experience. Elevate your mental clarity and enhance your mood with the natural power of mushrooms. With Spore Wellness, embark on a journey towards holistic health and inner balance. Embrace the vitality of Spore Wellness and unlock the potential of microdosing for a brighter tomorrow.
Spore Wellness Essential (SWE) is ideal for those looking for the purest mushroom micro-dose experience.
Our non-intoxicating formula contains only Golden Teacher mushrooms (psilocybe cubensis) and is vegan and gluten-free.
Each bottle of SWE contains 25 capsules (100mg per capsule).

</p>
        <h3> 
Ingredients:
<h3>
       <p>Golden Teacher (psilocybe cubensis) – 100 mg</p>`,
    },
    {
      id: 37,
      name: "Spore Wellness (Immune) Microdosing Mushroom Capsules",
      img:"/SPOREWELLNESS_IMMUNE.webp",
      price: 60,
      quantity: 1,
      details: {
        1: 'Each bottle of SWC contains 25 capsules (500mg per capsule)',
        2: 'Vegan and gluten free'
      },
      des: `
      <h3>About Spore Wellness (Immune) Microdosing Mushroom Capsules<h3>
        <p>The Spore Wellness Immune (SWI) is a blend of Golden Teacher (psilocybe cubensis), Reishi (ganoderma lucidum), Chaga (inonotus obliquus), and Organic Ginger.
Our unique non-intoxicating formula is ideal for those looking to give their insides a healthy boost.
Each bottle of SWI contains 25 capsules (500mg per capsule). Vegan and gluten-free.
Reishi (Ganoderma Lucidum) is often called the queen of mushrooms with a long tradition of use in different cultures.
Chaga (inonotus obliquus) is often called the king of Magic mushrooms. Found on birch trees in cold climates, it contains an abundance of polysaccharides within its chitin walls that are known to boost energy.

</p>
        <h3>Ingredients:<h3>
       <p>•	Golden Teacher (psilocybe cubensis) – 100 mg <br> 
•	Reishi (ganoderma lucidum) – 175 mg <br> 
•	Chaga (inonotus obliquus) – 175 mg <br> 
•	Organic Ginger – 50 mg
</p> `,
    },
    {
      id: 38,
      name: "Penis envy mushroom",
      img:"/PenisEnvy.png",
      price: 10,
      quantity: 1,
      details: {
        1: 'penis envy mushrooms are a kind of mushroom known for resembling a human penis, with a bulbous cap and thick stem',
        2: 'They’re a potent and sought-after psychoactive substance, with unusually high concentrations of psilocybin and psilocin',
        3: '	More intense, visual, and euphoric experience',
     
      },
      des: `
      <h3>About Penis Envy Mushroom<h3>
        <p>If you have heard of psilocybin mushrooms, also called magic mushrooms, you may have heard of Penis Envy mushrooms at one point or another. Penis Envy mushrooms come from the Psilocybe cubenis mushroom strain. With hundreds of psychoactive mushrooms available today, it is highly advisable to familiarize yourself with some of the most popular and in-demand strains worldwide.
</p>
       
       <p>The history of the Penis Envy mushroom is fascinating and dates back to 1970. Terrence McKenna, the world-renowned psychonaut, discovered the mushroom while exploring the Amazon rainforest. Along with his friend, Steven Pollock, they worked to introduce the Penis Envy mushroom not long after. This kind of mushroom is one of the most potent and psychotropic mushrooms on the planet. Hence, the high demand whenever it’s available.</p>
       <h3>Dosage guide:<h3>
           <p>•	Micro: 0.25 gram <br>
•	Low: 0.25 – 1 gram  <br>
•	Medium: 1 – 2 gram  <br>
•	Strong: 2.5 – 5 gram  <br>
•	Heavy: 5 gram and upwards
</p> `,
    },// MDMA/Molly Products
    {
      id: 40,
      name: "Pure MDMA Crystal (Molly)",
      img: "/molly.jpg",
      price: 80,
      quantity: 1,
      details: {
        1: 'Lab-tested 84% purity MDMA crystals',
        2: 'Available in 1g containers',
        3: 'Acetone-washed for maximum purity'
      },
      des: `
        <h3>About Pure MDMA Crystal (Molly)</h3>
        <p>Our premium MDMA crystals are sourced from trusted European labs and undergo rigorous testing to ensure the highest quality and purity. Each batch is acetone-washed to remove impurities and provide a clean, euphoric experience with minimal side effects.</p>
        
        <p>MDMA (3,4-methylenedioxymethamphetamine) is known for producing feelings of increased energy, pleasure, emotional warmth, and distorted sensory and time perception. Our crystals can be consumed orally in capsules or dissolved in water.</p>
        
        <h3>Effects:</h3>
        <p>• Increased empathy and sociability<br>
        • Enhanced sensory experiences<br>
        • Feelings of euphoria and well-being<br>
        • Mild psychedelic effects<br>
        • Energy boost without excessive stimulation</p>
        
        <h3>Dosage Guide:</h3>
        <p>• Threshold: 30-50mg<br>
        • Light: 50-80mg<br>
        • Common: 80-125mg<br>
        • Strong: 125-200mg<br>
        • Heavy: 200mg+</p>
        
        <p>For harm reduction, we recommend waiting at least 3 months between MDMA experiences and staying hydrated (but not overhydrated) during use.</p>
      `,
    },
    {
      id: 41,
      name: "Premium MDMA Pills (Blue Punisher)",
      img: "/bluepunisher.jpeg",
      price: 25,
      quantity: 1,
      details: {
        1: 'Contains 250-300mg MDMA per pill',
        2: 'Distinctive blue color with Punisher logo',
        3: 'Lab-tested for purity and consistency'
      },
      des: `
        <h3>About Premium MDMA Pills (Blue Punisher)</h3>
        <p>Our Blue Punisher MDMA pills are among the strongest available on the market, containing between 250-300mg of pure MDMA per pill. These distinctively shaped tablets feature the iconic Punisher skull logo and are known for their high quality and consistent effects.</p>
        
        <p>Each batch is lab-tested to ensure proper dosage and purity. These pills provide a smooth come-up followed by 4-6 hours of euphoric effects with minimal comedown when used responsibly.</p>
        
        <h3>Appearance:</h3>
        <p>• Deep blue color with speckles<br>
        • Punisher skull logo press<br>
        • Clean, professional pressing with sharp edges<br>
        • Average weight: 450-500mg (with binders)</p>
        
        <h3>Usage Guidelines:</h3>
        <p>Due to the high MDMA content, we strongly recommend starting with half a pill, especially for those with lower body weight or less experience. Wait at least 90 minutes before considering additional dosing.</p>
        
        <p>Always test your substances before consumption. We recommend using multiple reagent tests (Marquis, Mecke, and Simon's) to confirm content.</p>
      `,
    },
    
    // Cocaine Products
    {
      id: 42,
      name: "Premium Colombian Cocaine (Pure)",
      img: "/coc.jpg",
      price: 100,
      quantity: 1,
      details: {
        1: 'Lab-tested 92%+ purity',
        2: 'Directly sourced from Colombian producers',
        3: 'Minimal cutting agents, acetone-washed',
        4: 'Available in 1g packages'
      },
      des: `
        <h3>About Premium Colombian Cocaine</h3>
        <p>Our Premium Colombian Cocaine represents the highest quality available, sourced directly from trusted producers in Colombia's coca-growing regions. This product undergoes minimal processing and is acetone-washed to remove manufacturing impurities, resulting in a clean, smooth experience with optimal potency.</p>
        
        <p>Each batch is lab-tested for purity (92%+ cocaine hydrochloride) and screened for harmful adulterants. The product features distinctive pearlescent fish-scale appearance characteristic of high-purity cocaine.</p>
        
        <h3>Characteristics:</h3>
        <p>• Pearlescent "fish scale" appearance<br>
        • Slightly oily texture that clumps naturally<br>
        • Clean, subtle gasoline-like aroma<br>
        • Numbs gums/tongue within seconds of contact<br>
        • Dissolves completely in water without residue</p>
        
        <h3>Effects:</h3>
        <p>• Intense but clean euphoria (15-30 minutes)<br>
        • Enhanced alertness and energy<br>
        • Increased sociability and confidence<br>
        • Minimal jitteriness or anxiety compared to cut product<br>
        • Smoother comedown with less severe crash</p>
        
        <p>For harm reduction, use clean equipment, avoid mixing with alcohol (creates cocaethylene), and stay hydrated.</p>
      `,
    },
    {
      id: 43,
      name: "Street-Grade Cocaine (Stepped)",
      img: "/cocaine.jpeg",
      price: 60,
      quantity: 1,
      details: {
        1: '60-70% purity with common cutting agents',
        2: 'More affordable option for casual use',
        3: 'Available in 1g packages'
      },
      des: `
        <h3>About Street-Grade Cocaine</h3>
        <p>Our Street-Grade Cocaine offers a more affordable option for casual users while maintaining reasonable quality standards. This product has been "stepped on" (cut) with common agents to reduce potency while preserving most of the desired effects.</p>
        
        <p>This product contains approximately 60-70% cocaine hydrochloride, cut with common agents like levamisole, benzocaine, and inositol. While not pharmaceutical grade, this product is tested to ensure it's free from dangerous adulterants like fentanyl.</p>
        
        <h3>Characteristics:</h3>
        <p>• Chalky white appearance without fish scale pattern<br>
        • Dryer texture compared to pure cocaine<br>
        • Slightly delayed numbing effect<br>
        • May leave minimal residue when dissolved in water</p>
        
        <h3>Comparison to Pure Product:</h3>
        <p>• Somewhat shorter duration (10-20 minutes per dose)<br>
        • Requires larger doses for comparable effects<br>
        • Slightly more pronounced physical side effects<br>
        • More noticeable comedown effects</p>
        
        <p>This product is ideal for social settings where maximum purity isn't required. For most consistent effects, chop thoroughly before use to ensure even distribution of active ingredients.</p>
      `,
    },
    
    // Vape Products
    {
      id: 44,
      name: "THC Vape Cartridge (Blue Dream)",
      img: "/blue.jpeg",
      price: 45,
      quantity: 1,
      details: {
        1: '1g cartridge with 85% THC distillate',
        2: 'Terpene-infused for authentic strain profile',
        3: 'Universal 510-thread compatibility',
        4: 'Ceramic coil for optimal flavor'
      },
      des: `
        <h3>About THC Vape Cartridge (Blue Dream)</h3>
        <p>Our premium Blue Dream THC vape cartridge features high-potency cannabis distillate infused with strain-specific terpenes to recreate the beloved hybrid strain's effects and flavor profile. Each cartridge contains 1g of 85% THC oil in a high-quality glass and metal cartridge with ceramic coil technology.</p>
        
        <p>Blue Dream is known for its balanced effects, providing cerebral stimulation and creativity alongside gentle body relaxation—perfect for daytime or evening use. The cartridge delivers approximately 200-250 puffs depending on draw duration.</p>
        
        <h3>Flavor Profile:</h3>
        <p>• Sweet berry notes on inhale<br>
        • Subtle herbal and sandalwood undertones<br>
        • Clean, non-harsh vapor with minimal cough response</p>
        
        <h3>Effects:</h3>
        <p>• Onset: 1-3 minutes<br>
        • Duration: 1-3 hours<br>
        • Balanced hybrid effects (60% sativa, 40% indica)<br>
        • Mood elevation and creativity enhancement<br>
        • Moderate physical relaxation without sedation</p>
        
        <h3>Hardware Specs:</h3>
        <p>• 510-threaded for universal compatibility<br>
        • Pyrex glass tank with visible oil level<br>
        • Ceramic coil for clean flavor and no burning<br>
        • 1.8mm intake holes for optimal viscosity handling</p>
      `,
    },
    {
      id: 45,
      name: "DMT Vape Pen (Complete Kit)",
      img: "/dmtvape.jpeg",
      price: 120,
      quantity: 1,
      details: {
        1: 'Pre-filled 1ml cartridge with 500mg DMT',
        2: 'Includes battery with variable voltage settings',
        3: 'Proprietary blend with minimal harshness',
        4: 'Discreet design that resembles standard e-cigarettes'
      },
      des: `
        <h3>About DMT Vape Pen (Complete Kit)</h3>
        <p>Our DMT Vape Kit offers the most convenient and precise way to experience N,N-Dimethyltryptamine, a powerful natural psychedelic compound. This complete kit includes a pre-filled cartridge containing 500mg DMT in a 1ml solution, along with a variable voltage battery designed specifically for optimal vaporization temperature.</p>
        
        <p>Our proprietary carrier blend ensures smooth vapor with minimal throat harshness while maintaining potency. The kit comes in discreet packaging and resembles standard e-cigarette equipment for privacy.</p>
        
        <h3>Kit Contents:</h3>
        <p>• 1× Pre-filled cartridge (500mg DMT in 1ml solution)<br>
        • 1× 650mAh variable voltage battery (2.8V-4.2V)<br>
        • 1× USB charger<br>
        • 1× Protective storage case<br>
        • Usage instructions</p>
        
        <h3>Experience Guide:</h3>
        <p>• Threshold experience: 1 small puff (5-10mg)<br>
        • Moderate experience: 2 medium puffs (15-25mg)<br>
        • Full immersive experience: 3 deep puffs (30-40mg)</p>
        
        <p>For optimal results, use the middle voltage setting (3.2V) unless seeking more intense vapor production. The onset is immediate (within 10 seconds) with peak effects lasting 5-10 minutes and gradual return to baseline within 20-30 minutes.</p>
        
        <h3>Important Safety Notes:</h3>
        <p>Always use in a safe, seated or reclined position with trusted individuals present. Not recommended for those with heart conditions or psychiatric disorders. Integration practices recommended for processing experiences.</p>
      `,
    },
    {
      id: 46,
      name: "Disposable Nicotine Vape (Blue Razz Ice)",
      img: "/bluerazz.jpeg",
      price: 20,
      quantity: 1,
      details: {
        1: '5% nicotine salt formulation (50mg/ml)',
        2: 'Approximately 1500 puffs per device',
        3: 'Draw-activated (no buttons)',
        4: 'Rechargeable internal battery'
      },
      des: `
        <h3>About Disposable Nicotine Vape (Blue Razz Ice)</h3>
        <p>Our Blue Razz Ice disposable vape offers a convenient, maintenance-free nicotine experience with a delicious blue raspberry flavor profile enhanced with a cooling menthol finish. Each device comes pre-filled with 5ml of premium e-liquid containing 5% nicotine salt (50mg/ml) for a satisfying throat hit similar to traditional cigarettes.</p>
        
        <p>The sleek, pocket-friendly design features draw-activation technology (no buttons) and a rechargeable battery via USB-C port, providing approximately 1500 puffs per device—equivalent to about 5 packs of traditional cigarettes.</p>
        
        <h3>Flavor Profile:</h3>
        <p>• Sweet blue raspberry candy on inhale<br>
        • Tangy fruit notes mid-palate<br>
        • Refreshing menthol cooling sensation on exhale<br>
        • Medium-intensity flavor that doesn't overwhelm</p>
        
        <h3>Device Specifications:</h3>
        <p>• Dimensions: 105mm × 24mm × 14mm<br>
        • Battery: 650mAh rechargeable (USB-C port)<br>
        • E-liquid capacity: 5ml<br>
        • Coil: 1.2Ω mesh for optimal flavor<br>
        • Airflow: MTL (mouth-to-lung) draw resistance</p>
        
        <p>This disposable device is ideal for both first-time vapers and experienced users looking for convenience without sacrificing quality. The device comes fully charged and ready to use out of the box.</p>
      `,
    }
   
   
    
]
export default products;