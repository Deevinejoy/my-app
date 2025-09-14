const products = [
  {
    id: 1,
    name: "Black Widow",
    slug: "black-widow",
    category: "weed",
    img: "/black-widow.webp",
    quantity: 1,
    details: {
      1: "THC 23%",
      2: "CBD 0.1%",
      3: "Hybrid,Sweet, Earthy",
      4 : "For wholesale price, contact our customer care"
    },
    des: `<p>Black Widow is a hybrid strain that is known for its high THC content and relaxing effects.</p>
<p>It has a sweet and earthy flavor profile, making it a popular choice among cannabis enthusiasts.</p>
<p>with chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica</p>`,
  },
  {
    id: 2,
    name: "purple Haze",
    slug: "purple-haze",
    category: "weed",
    img: "/PurpleHaze_3A.png",
    quantity: 1,
    details: {
      1: "Tri-coloured buds consisting with dark green, orange and purple hues",
      2: "Sticky trichomes coat each bud inside and out",
      3: "Cross of Purple Thai X Haze strains",
      4: "Strain Graded at AAA",
         5 : "For wholesale price, contact our customer care"
    },
    des: `<p>Purple Haze is a sativa-dominant strain that is known for its uplifting and euphoric effects.</p>
<p>It has a sweet and fruity flavor profile, making it a popular choice among cannabis enthusiasts.</p>
<p>with chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica</p>`,
  },
  {
    id: 3,
    name: "OG Kush",
    slug: "og-kush",
    category: "weed",
    img: "/ogkush.jpg",
    quantity: 1,
    details: {
      1: "Dark lush green nugs with orange and purple notes",
      2: "Cross of Hindu Kush x Chemdawg strains",
      3: "Dense, medium to large sized nugs",
      4: "Strain Graded at AAA",
         5 : "For wholesale price, contact our customer care"
    },
    des: `<p>OG Kush is a hybrid strain that is known for its high THC content and relaxing effects.</p>
<p>It has a sweet and earthy flavor profile, making it a popular choice among cannabis enthusiasts.</p>
<p>with chunky green nugs and a hint of purple, it contains 60% sativa/ 40% indica</p>`,
  },
  {
    id: 4,
    name: "White guava",
    slug: "white-guava",
    category: "weed",
    img: "/popeyes-white-guava.webp",
    quantity: 1,
    details: {
      1: "Tri-coloured buds consisting with dark green, orange and purple hues",
      2: "Sticky trichomes coat each bud inside and out",
      3: "Cross of Purple Thai X Haze strains",
      4: "Strain Graded at AAA",
         5: "For wholesale price, contact our customer care"
    },
    des: `<p>White Guava is a potent, 100% pure indica strain celebrated for its mysterious lineage—believed to stem from either a Kush phenotype or a cross between Guava Diesel and White Hashplant.</p>
<p>This uncertainty only adds to its mystique and appeal. Known for its bold, creeping high, White Guava gradually blankets the body in a calming, euphoric buzz, making it ideal for unwinding after a stressful day.</p>
<p>Its deeply relaxing effects are perfect for easing tension, promoting sleep, or managing chronic pain. Loved by both medical and recreational users, White Guava is a go-to for those seeking full-body tranquility and peace of mind.</p>`,
  }, 

    {
      id: 7,
      name: "Wedding Cake",
      slug: "wedding-cake",
      category: "weed",
      img: "/WeddingCake.jpg",
      quantity: 1,
      details: {
        1: 'Beautiful bright green buds, with undertones of purple and orange',
        2: 'Dense medium-sized nugs are coated in a rich layer of trichomes',
        3: 'Strain Graded at AAA'
      },
      des: `<h2>About Wedding Cake</h2>
    <p>If you prefer Indica-dominant hybrids, you are going to love <strong>Wedding Cake</strong>. With a 70% Indica to 30% Sativa ratio, the strain has been created by crossing Triangle Cookies with Animal Mints, giving it the unique, sweet, earthy, and fruity flavour it is named for. Dive into a blissful experience as Wedding Cake combines the relaxing effects of its Indica lineage with a touch of Sativa's uplifting qualities. Known for its calming euphoria and therapeutic potential, Wedding Cake is a popular choice for managing stress, anxiety, and pain.</p>
    
    <p>As you can probably guess by its name, Wedding Cake is extremely famous for its delicious, fruity taste and aroma. However, the strain also has high THC levels and is commonly used to treat a number of medical conditions such as depression, stress, anxiety, muscle syndrome, and insomnia.</p>
    
    <h3>Genetics and Flavor Profile</h3>
    <p>Wedding Cake is the result of crossing two renowned strains—Triangle Cookies and Animal Mints. This genetic blend contributes to its distinct, sweet, earthy, and fruity flavor profile. The strain's name reflects its rich, dessert-like aroma and taste, which combines hints of vanilla, citrus, and a touch of herbal earthiness.</p>
    
    <h3>Therapeutic Potential</h3>
    <p>With its relaxing and mood-enhancing properties, Wedding Cake is a popular choice for managing stress, anxiety, and chronic pain. The strain's ability to induce a state of calm while simultaneously uplifting the spirits makes it an effective option for those seeking both physical and emotional relief.</p>
    
    <p><strong>Usage:</strong> Wedding Cake can be enjoyed in various forms, including smoking, vaping, or incorporating into edibles. Whether you're looking for a relaxing evening at home or a way to enhance social gatherings, this strain offers versatility and effectiveness.</p>
    
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
      slug: "gorilla-zkittlez",
      category: "weed",
      img: "/Gorilla-Skittle.jpg",
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
      slug: "super-lemon-haze",
      category: "weed",
      img: "/super_lemon_haze.jpg",
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
      slug: "lemon-sour-diesel",
      category: "weed",
      img: "/lemonsourdieselAA.jpg",
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
      slug: "love-potion",
      category: "weed",
      img: "/Love-Potion.jpeg",
      price: 22,
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
      <p>The Love Potion #9 is an extremely powerful, cannabis-based aphrodisiac. This basically means that the strain will increase the sexual desire, pleasure, and behavior in its users, making it the perfect strain to share with your special someone on nearly all romantic occasions. This is also why this strain shouldn't be used out in public, lest you fall into a difficult situation.</p>
      <p>At the same time, Love Potion #9 is also so much more. Its sativa roots induce a feeling of intense joy and happiness in its users' minds, which will leave you feeling relaxed and blissful but won't affect your energy levels. With time, the strain also turns sedative, so be sure to make use of your intimate time before you find yourself drifting off.</p>
      `,
  },
  {
      id: 12,
      name: "Sour diesel",
      slug: "sour-diesel",
      category: "weed",
      img: "/sour-diesel.jpg",
      quantity: 1,
      details: {
          1: 'Deep forest green nugs with lots of thin orange hairs',
          2: 'Medium-sized dense nugs, bursting with trichomes',
          3: 'Strain Graded at AAA'
      },
      des: `
      <h3>Flavour</h3>
      <p>Sour Diesel, otherwise known as "Sour D" or "Sour Deez," is a Sativa-dominant hybrid strain with a (90/10) sativa/indica ratio. The origin of Sour Diesel Marijuana is frequently debated within the marijuana community. Some say it's a cross between mass super skunk and 91 Chemdog, while others claim that it's a cross between Mexican sativa and a Chemdog phenotype.</p>
      <p>Either way, you can undoubtedly look forward to a high like no other. Couch lock and a "heavy feeling" aren't a factor when smoking sour diesel. Instead, you can expect an invigorating cerebral high that opens up doors of creativity.</p>
      `,
  },
  {
      id: 13,
      name: "Gorilla glue",
      slug: "gorilla-glue",
      category: "weed",
      img: "/gorilla_glue.jpg",
      quantity: 1,
      details: {
          1: 'Colourful green nugs with orange hues',
          2: 'Balanced Hybrid with genetics coming from Chocolate Diesel and Sour Diesel',
          3: 'Small to medium sized, dense buds',
          4: 'Strain Graded at AAA'
      },
      des: `
      <h3>Flavour</h3>
      <p>Prepare your taste buds for an explosion of delightful earthy and pine notes, gently infused with hints of fresh lemon zest. Gorilla Glue #4 boasts a rich and robust taste that lingers on the palate, leaving a pleasantly sweet aftertaste to savor. With every inhale, you'll discover the subtle nuances of its genetic heritage, while the exhale reveals a smooth and soothing essence that soothes the senses.</p>
  
      <h3>Effects</h3>
      <p>Gorilla Glue #4 takes you on a journey of relaxation and euphoria. Its Indica dominance brings forth a soothing and calming sensation, melting away stress and tension. Meanwhile, the Sativa influence elevates your mood, inducing a sense of happiness and bliss that brightens your outlook on life. Discover the extraordinary effects of Gorilla Glue #4, an exquisitely balanced cannabis strain that combines the best of both worlds with its 60% Indica and 40% Sativa genetics.</p>
      `,
  },
  {
      id: 14,
      name: "Blackberry Zkittlez",
      slug: "blackberry-zkittlez",
      category: "weed",
      img: "/BBZ.jpg",
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
      <p>The first thing you'll notice is the captivating aroma of ripe blackberries, tantalizing your senses and setting the stage for what's to come. As you take your first inhale, a burst of sweet and fruity notes dances on your taste buds, reminiscent of freshly-picked blackberries with a hint of tropical zest. But that's not all – as the smoke unfolds, a subtle undertone of sugary candy emerges, adding a playful twist to the overall experience.</p>
  
      <h3>Effects</h3>
      <p>If the wide range of flavour wasn't enough to satiate your desire for variety, the Blackberry Zkittlez buzz has you covered! Your body and your mind will have two completely different experiences here, yet they'll work together to produce a euphoric high.</p>
      <p>The full-body effects from this high THC (well over 20%) cannabis strain will relax the muscles and the joints, removing the stresses of the day, while the cerebral, happiness-inducing head high will ensure you don't drift off to sleep immediately, and instead enjoy a creative mindset conducive with meaningful conversation and jokes for days!</p>
      `,
  },    
  {
    id: 16,
    name: "Nepalese hash",
    slug: "nepalese-hash",
    category: "concentrates",
    img:"/Nepalesehash.webp",
    price: 25,
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
      Unlike machine-pressed hashish, Nepalese Hash undergoes a meticulous hand-pressing process. This hands-on approach ensures that every batch retains its soft, flexible texture and preserves the integrity of its flavors and aromas. With each puff, you'll savor the rich and complex profile unique to Nepalese hashish, elevating your cannabis experience to new heights.</p>
      <p>A Legacy of Excellence<br>
      The original Nepalese Temple Balls were traditionally used in spiritual ceremonies and rituals, revered for their meditative and calming properties. They are made from the finest cannabis plants grown in the high altitudes of the Himalayas, where the unique climate and soil conditions produce resin-rich strains. The craftsmanship behind each temple ball is unparalleled, resulting in a product that is both highly potent and deeply aromatic, with earthy, woody notes complemented by subtle spicy undertones.</p>
      <p>Effects<br>
      When consumed, Nepalese Temple Hash provides a smooth, long-lasting high that is deeply relaxing and introspective, perfect for unwinding or engaging in creative and contemplative activities. The full-spectrum nature preserves the plant's rich cannabinoid and terpene profiles, delivering a balanced and complex experience that enthusiasts appreciate for its authenticity.</p>
    `,
  },

  {
    id: 17,
    name: "Purple Haze",
    slug: "purple-haze-weed",
    category: "weed",
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
    id: 15,
    name: "Runtz",
    slug: "runtz",
    category: "weed",
    img:"https://res.cloudinary.com/dajo3lcto/image/upload/v1744841227/Runtz_single_taowrn.jpg",
    price: 22,
    quantity: 1,
    details: {
      1: 'Sweet, fruity, candy-like flavour profile',
      2: 'Cross of Zkittlez and Gelato strains',
      3: 'Medium size nugs, covered with sticky trichomes',
      4: 'THC: 25-32%'
    },
    des: `
 

<h3>Flavour</h3><p>Named for the iconic candy, Runtz strain brings on a super delicious fruity flavor with tropical citrus and sour berries galore. The aroma is very similar, although with a sharp spicy pineapple effect that turns slightly pungent as the sticky little nugs are broken apart and burned.</p>
<h3>Effects</h3>
      <p>The Runtz high comes roaring in a few minutes after your final toke, first hitting your head with a calming lift before spreading its tingly tendrils throughout the rest of your body. As the Runtz high expands, you’ll begin to feel a deeply calming effect spread through your limbs, leaving you totally sedated and couch-locked, immovable for hours and hours on end before you finally fall into a deep and peaceful sleep.</p>
    `,
  },
  {
    id: 309,
    name: "Pure Balance Tinctures – 1000mg CBD",
    slug: "pure-balance-tinctures-cbd",
    category: "concentrates",
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
    id: 18,
    name: "THC 100mg Hemp Seed Oil Capsules",
    slug: "thc-100mg-hemp-seed-oil-capsules",
    category: "concentrates",
    img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744839711/100MGoilcapsule_hksed6.webp",
    price: 38,
    quantity: 1,
    details: {
      1: 'Each capsule contains 100 mg of THC',
      2: 'Each bottle contains 3 capsules',
    },
    des: `
      <p>The THC 100mg Hemp Seed Oil Capsules – CO2 represent a high-quality, convenient way to enjoy the benefits of the cannabis plant without the need for smoking or vaping. These capsules, enriched with THC oil and derived from premium hemp seed oil, offer a balanced blend of health benefits and controlled THC dosing. Designed for both new users and experienced consumers, these THC pills provide a potent dose that's easy to integrate into daily routines.</p>
      <p>Flavor and Ease of Use<br>
      While most THC products come with distinctive flavors, these capsules are flavor-neutral, making them ideal for users sensitive to the earthy or herbal taste of cannabis. Encapsulated in an easy-to-swallow format, they're discreet and portable, allowing you to take your THC oil supplement wherever and whenever you need it without the aftertaste commonly associated with other cannabis products.</p>
      <p>Effects<br>
      The effects of THC 100mg Hemp Seed Oil Capsules provide a reliable experience due to their controlled dosing and premium extraction methods. Here's what users can typically expect:</p>
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
    slug: "viridesco-sea-warp-honey-oil",
    category: "concentrates",
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
    slug: "qntm-clouds-gold-thc-vape-strawberry",
    category: "vapes",
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
    slug: "zigzag-hash",
    category: "concentrates",
    img: "/ZigZagHash.webp",
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
   <p>This hash delivers a cerebral and invigorating high, providing uplifting yet relaxing effects. It's known for inducing euphoria, contentment, and relaxation, making it suitable for both recreational and medicinal use. Some users have found it effective in alleviating conditions such as depression and ADHD.</p>
    `,
  },
  {
    id: 22,
    name: "VIRIDESCO-RSO",
    img:"/viridesco-rso-kali-mist-5ml.webp",
    slug: "viridesco-rso",
    category: "concentrates",
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
    slug: "revival-cbd",
    category: "concentrates",
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
    id: 25,
    name: "Nebula Shatter -Top shelf",
    img:"/Shatter-Nebula-1.webp",
    slug: "nebula-shatter-top-shelf",
    category: "concentrates",
    price: 23,
    quantity: 1,
    details: {
      1: 'Golden',
      2: 'More description below',
    },
    des: `
      <p>Nebula, meaning "Starcloud" as it has been known to "twinkle" with THC coating, is an award-winning Balanced Hybrid (50% Indica / 50% Sativa) strain. The Nebula marijuana strain was bred by Paradise Seeds in 1996 and is a cross between a US Haze and Master Widow. Nebula has many accolades to its name including the 2005 Copa La Bella Flor Spain. Other honorable mentions are the 3rd place in High Times Cannabis Cup of 1999 and the runner-ups in 2005. It also clinched 3rd position in the 2004 Highlife Cup.
</p>
    `,
  },
  {
    id: 26,
    name: "Tesla Hash",
    slug: "tesla-hash",
    category: "concentrates",
    img: "/TESLA_HASH.webp",
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
These special cannabis strains develop many traits that allow them to survive the harshness of Afghanistan's mountains, such as increased trichome production, making these specific strains very coveted for hash production. Tesla Hash is one of the many regional variants of hash available, differentiating itself from the others with its' impressive THC concentration that ranges around 40-50%, providing users with a powerful buzz that is both euphoric and relaxing.
Tesla Hash is imbued with the earthy, spicy and pine-like notes of the indica landrace strains Afghanistan has to offer. The smoke is smooth, mild and reminiscent of old-school hash with its' relaxing body high and sedating nature.
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
    slug: "bliss-edibles-tropical",
    category: "Edibles",
    img: "/BLISS_Tropical_NEW.webp",
    price: 22,
    quantity: 1,
    details: {
      1: 'Our Tropical Assorted Gummies is your fast-track ticket to a fiesta..',
      2: 'Infused with THC and crafted for a juicy delight in every bite, you can kick back, relax, and remember the good times with these Tropical gummies..',
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
    slug: "bliss-edibles-party-mix",
    category: "Edibles",
    img: "/BLISS_PartyMix_NEW_2a.webp",
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
   <p>Always start with a low dosage (25mg THC or less) and wait at least 2 hours before consuming more to gauge your tolerance. Remember, the effects of edibles can vary, so it's essential to consume responsibly.</p>
    `,
  },
  {
    id: 29,
    name: "2000mg Gummy – Atomic Wheelchair",
    img:"/gummy.jpg",
    slug: "2000mg-gummy-atomic-wheelchair",
    category: "edibles",  
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
    slug: "qntm-clouds-gold-thc-vape-liquid-tangerine",
    category: "vapes",  
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
      <p>Elevate your vaping experience with QNTM Clouds brand's Gold THC Vape Liquid Tangerine, boasting a potent 1000mg formulation. Immerse yourself in the tangy zest of tangerine, crafted to perfection for unparalleled satisfaction.
QNTM Extracts new line of Clouds Gold THC vape juice.
New formula with Organic MCT oil, proprietary natural flavouring extracts (Tangerine), and THC Distillate.
Every 10mL bottle contains 1000mg of THC, just put it into your e-cig tank for a smooth and flavourful smoke. Medicated discreetly, as the smoke doesn't smell like bud, just fruity.

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
    slug: "cherry-sativa-jelly-bombs-edible",
    category: "edibles",
    img:"/Twisted-Extract-cbd.jpg",
    quantity: 1,
    details: {
      1: 'Great way to get a mood lift during the day, spark up some creativity, and enhance your focus',
      2: 'Made using a BC grown, high quality sativa cannabis strain.',
    },
    des: `
    <h3>About Cherry Sativa Jelly Bombs - Twisted Extracts<h3>
      <p>Wherever your happy place is, Twisted Extracts Sativa Jelly Bombs will take you there. They're great for many uses like sparking creativity (feel like Bob Ross), unwinding from the day (enhancing your binge-watching Netflix abilities), and making you feel like a kid again (regardless of how long it's been).
</p>
    
     <p>Effects: Euphoric, Energetic, Uplifted, and Creative.<br>
Each Jelly Bomb is infused with 80 mg of THC derived from a Sativa-dominant cannabis strain (8 x 10 mg THC servings each).
</p>
  
      <p>All Twisted Extracts gummies are lab-tested and hand wrapped for quality assurance purposes.<br>
Ingredients: Sugars (corn syrup, sugar from beets), Water, Gelatin, Citric acid, Natural and artificial flavours, Pectin, Coconut oil, Canola oil, Cannabis extract, Carnauba wax, FD&C Blue #1, FD&C Yellow #5.<br>
Disclaimer: Cannabis affects all people differently based on factors like genetics, physiology and lifestyle. How an edible affects others may not affect you in the same way.
Side effects may include: giggle fits, spontaneous interpretive dance, and getting along unusually well with your family members.<br>
Please be advised that due to circumstances that are out of our control, due to the warmer weather during summer, We are not liable should product melt during transport, this does not change or decrease product potency or effect.
</p>`
},
{
  id: 32,
  name: "250mg THC infused Milk Chocolate",
  slug: "250mg-thc-milk-chocolate-edible",
  category: "edibles",
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
      <p>Indulge in the perfect blend of rich, creamy milk chocolate and premium THC with Adorable's 200mg THC-Infused Milk Chocolate. Designed for both new and experienced users, this delectable treat offers a smooth, delicious way to enjoy the effects of cannabis while satisfying your sweet tooth.
</p>
      <h3>Why Choose Adorable THC-Infused Milk Chocolate?<h3>
     <p>✔ Premium Quality Ingredients – Made with high-grade milk chocolate and infused with top-quality THC extract for a consistent and enjoyable experience.<br>
✔ Precisely Dosed – Each bar contains 200mg of THC, making it easy to portion and customize your experience.<br>
✔ Discreet & Convenient – A delicious, hassle-free way to enjoy cannabis without the need for smoking or vaping.<br>
✔ Long-Lasting Effects – Experience deep relaxation, euphoria, and stress relief with this edible's slow-releasing benefits.
</p>`
},
{
  id: 33,
  name: "Golden Teacher",
  slug: "golden-teacher-mushroom",
  category: "shrooms",
  img:"/GoldenTeacher.jpg",
  price: 9,
  quantity: 1,
  details: {
    1: 'Cap. An ashy red color, with a yellow or golden center, hence the "golden" in the name.',
    2: 'Stipe. Hollow and thicker toward the base',
    3: 'Gills. Vary from whitish to purple-brown.',
  },
  des: `
    <h3>About Golden Teacherh3>
      <p>The Golden Teacher magic mushroom strain is a favourite among cultivators and psychonauts for years. It's a favourite amongst psychonauts worldwide for its profound psychedelic journey. They are best known for their shamanistic properties, or spiritual effects rather than solely "tripping", and moderate levels of psilocybin and psilocin. The shining golden caps and wise teachings give this mushroom its rightful name.
Consuming Golden Teachers will give a feeling of enlightenment. They will help you connect with nature. Amazing ability to heal the mind and spirit. These psychedelic magic mushrooms are for both beginners and veterans.
</p>
      <h3>Dosage Guide<h3>
     <p>•	Micro: 0.25 gram<br>
•	Low: 0.25 – 1 gram<br>
•	Medium: 1 – 2 gram<br>
•	Strong: 2.5 – 5 gram<br>
•	Heavy: 5 gram and upwards
</p>
    `
},
{
  id: 34,
  name: "Blue Meanie",
  slug: "blue-meanie-mushroom",
  category: "shrooms",
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
      <p>• May aid in mood improvement<br>
• Potential to support mental clarity <br>
• Can foster deep self-reflection <br>
• Might help in reducing stress and anxiety <br>
</p>`
},
{
  id: 35,
  name: "Spore Wellness (Cognitive) Microdosing shroom Capsules",
  slug: "spore-wellness-cognitive-microdosing-capsules",
  category: "pills",
  img:"/Spore-Wellness-Cognitive.webp",
  price: 60,
  quantity: 1,
  details: {
    1: 'Each bottle of SWC contains 25 capsules (500mg per capsule)',
    2: 'Vegan and gluten free',
  },
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
• Improved Cognitive Function: Support brain health and enhance your mental performance.<br>
• Stress Reduction: Experience a calming effect that helps alleviate anxiety and promotes relaxation.<br>
• Holistic Wellness: Embrace a natural approach to mental health, aligning with the growing trend of holistic health solutions.
</p>`
},
{
  id: 36,
  name: "Spore Wellness (Essential) Microdosing shroom Capsules",
  slug: "spore-wellness-essential-microdosing-capsules",
  category: "pills",
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
    slug: "spore-wellness-immune-microdosing-capsules",
    category: "pills",
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
    slug: "penis-envy-mushroom",
    category: "shrooms",
    img:"/PenisEnvy.png", 
    price: 10,
    quantity: 1,
    details: {
      1: 'penis envy mushrooms are a kind of mushroom known for resembling a human penis, with a bulbous cap and thick stem',
      2: 'They are a potent and sought-after psychoactive substance, with unusually high concentrations of psilocybin and psilocin',
      3: 'More intense, visual, and euphoric experience',
   
    },
    des: `
    <h3>About Penis Envy Mushroom<h3>
      <p>If you have heard of psilocybin mushrooms, also called magic mushrooms, you may have heard of Penis Envy mushrooms at one point or another. Penis Envy mushrooms come from the Psilocybe cubenis mushroom strain. With hundreds of psychoactive mushrooms available today, it is highly advisable to familiarize yourself with some of the most popular and in-demand strains worldwide.
</p>
     
     <p>The history of the Penis Envy mushroom is fascinating and dates back to 1970. Terrence McKenna, the world-renowned psychonaut, discovered the mushroom while exploring the Amazon rainforest. Along with his friend, Steven Pollock, they worked to introduce the Penis Envy mushroom not long after. This kind of mushroom is one of the most potent and psychotropic mushrooms on the planet. Hence, the high demand whenever it's available.</p>
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
    slug: "pure-mdma-crystal-molly",
    category: "pills",
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
    slug: "premium-mdma-pills-blue-punisher",
    category: "pills",   
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
    img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744803890/coc_srzyum.jpg",
    slug: "pure-cocaine",
    category: "drugs",
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
    img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744803782/cocaine_p7g1v9.jpg",
    slug: "impure-cocaine",
    category: "drugs",
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
  
  // opiods
 
  {
    id: 101,
    name: "Oxycodone (OxyContin)",
    slug: "oxycodone-oxycontin",
    category: "Opioids",
    img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744815289/WhatsApp_Image_2025-04-15_at_04.35.06_oeaeun.jpg",
    price: 125,
    quantity: 1,
    details: {
      1: 'Schedule II controlled substance',
      2: 'Available in various strengths (5mg-80mg)',
      3: 'Extended-release formulation',
      4: 'Taken every 12 hours for pain management'
    },
    des: `
  About Oxycodone (OxyContin)
  
  Oxycodone is a potent opioid analgesic medication prescribed for the management of moderate to severe pain. OxyContin is the brand name for the extended-release formulation of oxycodone, designed to provide long-lasting pain relief.
  
  Each tablet utilizes a time-release mechanism to deliver consistent pain relief over a 12-hour period, making it suitable for patients requiring around-the-clock pain management. The medication comes in various strengths to accommodate different levels of pain intensity and patient tolerance.
  
  Clinical Applications:
  
  • Management of chronic, severe pain
  • Post-surgical pain relief
  • Cancer-related pain
  • Severe injury-related pain
  
  Pharmacological Properties:
  
  • Binds to mu-opioid receptors in the central nervous system
  • Half-life of approximately 3-5 hours
  • Available in strengths ranging from 5mg to 80mg
  • Metabolized primarily in the liver
  
  This medication requires a valid prescription and should only be used under the supervision of a qualified healthcare provider. Proper storage, handling, and disposal protocols must be followed due to its high potential for misuse.
      `,
    },
    {
      id: 102,
      name: "Oxymorphone (Opana)",
      slug: "oxymorphone-opana",
      category: "Opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828847/WhatsApp_Image_2025-04-15_at_04.37.43_nxkpbf.jpg",
      price: 140,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Available in immediate and extended-release (5mg-40mg)',
        3: '5-10 times more potent than oral morphine',
        4: 'High bioavailability when administered parenterally'
      },
      des: `
  About Oxymorphone (Opana)
  
  Oxymorphone is a potent semi-synthetic opioid analgesic derived from morphine. It's marketed under the brand name Opana and available in both immediate-release and extended-release formulations for the management of moderate to severe pain.
  
  This medication provides effective pain relief through its high affinity for mu-opioid receptors, producing strong analgesic effects. Oxymorphone is approximately 5-10 times more potent than oral morphine, requiring precise dosing and careful medical supervision.
  
  Clinical Applications:
  
  • Severe chronic pain management
  • Breakthrough pain relief
  • Post-operative pain control
  • Pain associated with terminal illness
  
  Pharmacological Properties:
  
  • Rapid onset of action in immediate-release form (15-30 minutes)
  • Extended-release provides 12-hour pain control
  • Low oral bioavailability (approximately 10%)
  • Available in strengths ranging from 5mg to 40mg
  
  This medication requires a valid prescription and strict adherence to the prescribed dosing regimen. It should not be crushed, chewed, or dissolved, as this can lead to rapid release and absorption of a potentially fatal dose.
      `,
    },
    {
      id: 103,
      name: "Hydrocodone (Vicodin)",
      slug: "hydrocodone-vicodin",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828858/WhatsApp_Image_2025-04-15_at_04.44.34_zxaeas.jpg",
      price: 85,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Combination product with acetaminophen',
        3: 'Available in multiple strengths (5/325mg-10/325mg)',
        4: 'Taken every 4-6 hours for pain relief'
      },
      des: `
  About Hydrocodone (Vicodin)
  
  Hydrocodone is a semi-synthetic opioid analgesic commonly prescribed in combination with acetaminophen (paracetamol) under brand names such as Vicodin, Norco, and Lortab. This combination leverages the complementary pain-relieving mechanisms of both active ingredients.
  
  The medication is primarily indicated for the management of moderate to moderately severe pain. The inclusion of acetaminophen enhances the analgesic effect while allowing for lower doses of hydrocodone, potentially reducing some opioid-related side effects.
  
  Clinical Applications:
  
  • Acute pain management
  • Dental pain
  • Injury-related pain
  • Post-surgical recovery
  
  Formulation Details:
  
  • Typical combination ratios: 5/325mg, 7.5/325mg, or 10/325mg (hydrocodone/acetaminophen)
  • Immediate-release tablet formulation
  • Dosing interval typically every 4-6 hours as needed for pain
  • Maximum daily acetaminophen limit: 3000-4000mg (varies by guidelines)
  
  This medication requires a valid prescription and should be used for the shortest duration necessary to minimize the risk of dependence. Patients should be aware of the acetaminophen content to avoid exceeding daily limits when taking multiple medications.
      `,
    },
    {
      id: 104,
      name: "Hydromorphone (Dilaudid)",
      slug: "hydromorphone-dilaudid",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828863/WhatsApp_Image_2025-04-15_at_04.45.27_y9dwzu.jpg",
      price: 110,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Available in multiple formulations (oral, injectable)',
        3: '5-7 times more potent than morphine',
        4: 'Rapid onset of action (15-30 minutes oral)'
      },
      des: `
  About Hydromorphone (Dilaudid)
  
  Hydromorphone is a highly potent semi-synthetic opioid analgesic derived from morphine. Marketed primarily under the brand name Dilaudid, it's prescribed for the management of moderate to severe pain, particularly when other analgesics have proven ineffective.
  
  With potency approximately 5-7 times that of morphine, hydromorphone provides rapid and effective pain relief. Its versatility is evidenced by multiple available formulations, including oral tablets, oral solutions, suppositories, and injectable preparations for various clinical scenarios.
  
  Clinical Applications:
  
  • Breakthrough cancer pain
  • Severe acute pain management
  • Palliative care settings
  • Post-operative pain control
  
  Available Formulations:
  
  • Oral tablets: 2mg, 4mg, 8mg strengths
  • Oral solution: 1mg/mL concentration
  • Injectable solution: 1mg/mL, 2mg/mL, 4mg/mL, 10mg/mL
  • Extended-release tablets (Exalgo): 8mg, 12mg, 16mg, 32mg
  
  Hydromorphone features a relatively short duration of action (4-6 hours) in its immediate-release forms, requiring more frequent dosing compared to extended-release formulations. Due to its high potency, precise dosing and careful titration are essential to minimize adverse effects.
      `,
    },
    {
      id: 105,
      name: "Fentanyl (Duragesic)",
      slug: "fentanyl-duragesic",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828866/WhatsApp_Image_2025-04-15_at_04.47.26_acqe3j.jpg",
      price: 200,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Available as transdermal patches, lozenges, and injectable',
        3: '50-100 times more potent than morphine',
        4: 'Transdermal delivery provides 72-hour pain relief'
      },
      des: `
  About Fentanyl (Duragesic)
  
  Fentanyl is an extremely potent synthetic opioid analgesic, approximately 50-100 times more powerful than morphine. It's available in multiple formulations, with the Duragesic transdermal patch being a common delivery system for chronic pain management.
  
  The transdermal patch provides continuous release of fentanyl through the skin over a 72-hour period, making it suitable for patients requiring constant pain control. Other formulations include lozenges (Actiq), buccal tablets (Fentora), nasal sprays, and injectable solutions for various clinical applications.
  
  Clinical Applications:
  
  • Chronic pain management in opioid-tolerant patients
  • Breakthrough cancer pain (rapid-acting formulations)
  • Surgical anesthesia and perioperative analgesia
  • Procedural sedation
  
  Formulation Details:
  
  • Transdermal patches: 12mcg/hr, 25mcg/hr, 50mcg/hr, 75mcg/hr, 100mcg/hr
  • Oral transmucosal lozenges: 200mcg, 400mcg, 600mcg, 800mcg, 1200mcg, 1600mcg
  • Injectable solution: 50mcg/mL concentration
  
  Due to its extremely high potency, fentanyl carries significant risks of respiratory depression and overdose. It requires careful patient selection, dosing, and monitoring. The medication should only be prescribed to opioid-tolerant patients except in specific medical settings like surgical anesthesia.
      `,
    },
    {
      id: 106,
      name: "Morphine (MS Contin)",
      slug: "morphine-ms-contin",
      category: "opioids",
      img: "/morphine.jpeg",
      price: 95,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Available in immediate and extended-release (15mg-200mg)',
        3: 'Standard against which other opioids are measured',
        4: 'Extended-release provides 8-12 hour pain relief'
      },
      des: `
  About Morphine (MS Contin)
  
  Morphine is the principal alkaloid of opium and serves as the prototype opioid analgesic against which all other opioids are measured. MS Contin is the brand name for the controlled-release oral formulation of morphine sulfate, designed to provide prolonged pain relief.
  
  As a natural opioid, morphine has been used in medicine for over 200 years and remains a cornerstone in pain management protocols worldwide. It exerts its analgesic effects primarily through mu-opioid receptor activation in the central nervous system.
  
  Clinical Applications:
  
  • Moderate to severe chronic pain
  • Cancer-related pain
  • End-of-life palliative care
  • Post-surgical pain management
  
  Available Formulations:
  
  • MS Contin (extended-release): 15mg, 30mg, 60mg, 100mg, 200mg tablets
  • Immediate-release tablets: 15mg, 30mg
  • Oral solution: 10mg/5mL, 20mg/5mL, 100mg/5mL concentrations
  • Injectable solutions: multiple concentrations
  
  The extended-release formulation provides sustained analgesia over 8-12 hours, reducing dosing frequency and providing more consistent pain control compared to immediate-release options. Proper titration is essential to balance pain relief with side effect management.
      `,
    },
    {
      id: 107,
      name: "Codeine",
      slug: "codeine",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828869/WhatsApp_Image_2025-04-15_at_04.57.16_v7h5iw.jpg",
      price: 50,
      quantity: 1,
      details: {
        1: 'Schedule II-V controlled substance (depending on formulation)',
        2: 'Often combined with acetaminophen or other non-opioids',
        3: 'Metabolized to morphine in the liver',
        4: 'Available in multiple strengths (15mg-60mg)'
      },
      des: `
  About Codeine
  
  Codeine is a naturally occurring opium alkaloid used as an analgesic, antitussive (cough suppressant), and antidiarrheal medication. It's considered a weak opioid, approximately 1/10 the potency of morphine, making it suitable for mild to moderate pain management.
  
  A significant portion of codeine's analgesic effect comes from its conversion to morphine in the liver via the CYP2D6 enzyme system. This metabolic pathway exhibits significant genetic variability, resulting in differences in analgesic response among patients.
  
  Clinical Applications:
  
  • Mild to moderate pain relief
  • Cough suppression
  • Diarrhea management
  • Step 2 of the WHO pain ladder
  
  Common Formulations:
  
  • Codeine phosphate tablets: 15mg, 30mg, 60mg
  • Combination products with acetaminophen/paracetamol
  • Combination products with NSAIDs
  • Codeine-containing cough syrups (various concentrations)
  
  The scheduling of codeine products varies based on concentration and combination ingredients. When used for analgesia, codeine is often combined with non-opioid analgesics like acetaminophen to enhance pain relief through complementary mechanisms.
      `,
    },
    {
      id: 108,
      name: "Methadone",
      slug: "methadone",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828874/download_t82l4h.jpg",
      price: 60,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Long half-life (24-36 hours)',
        3: 'Used for opioid maintenance therapy and pain management',
        4: 'Available in oral tablets, dispersible tablets, and liquid'
      },
      des: `
  About Methadone
  
  Methadone is a synthetic opioid with unique pharmacological properties that make it valuable for both pain management and opioid use disorder treatment. Its long half-life of 24-36 hours allows for once-daily dosing in maintenance therapy protocols.
  
  Unlike many other opioids, methadone also acts as an NMDA receptor antagonist and inhibits the reuptake of serotonin and norepinephrine, contributing to its effectiveness in managing complex pain conditions. These multiple mechanisms of action provide analgesia through complementary pathways.
  
  Clinical Applications:
  
  • Opioid maintenance therapy for opioid use disorder
  • Chronic pain management, particularly neuropathic pain
  • Cancer-related pain
  • Detoxification protocols
  
  Available Formulations:
  
  • Oral tablets: 5mg, 10mg strengths
  • Dispersible tablets: 40mg
  • Oral solution/liquid: 1mg/mL, 2mg/mL, 10mg/mL concentrations
  
  Methadone requires careful dosing and monitoring due to its long half-life and potential for QT interval prolongation. When used for pain management, it typically requires more frequent dosing (every 8-12 hours) than when used for opioid maintenance therapy.
      `,
    },

    {
      id: 111,
      name: "Percocet (Oxycodone/APAP)",
      slug: "percocet-oxycodone-apap",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744829872/images_2_gfpcyb.jpg",
      price: 90,
      quantity: 1,
      details: {
        1: 'Schedule II controlled substance',
        2: 'Combination of oxycodone and acetaminophen',
        3: 'Available in multiple strengths (2.5/325mg-10/325mg)',
        4: 'Taken every 4-6 hours for pain relief'
      },
      des: `
  About Percocet (Oxycodone/APAP)
  
  Percocet is a combination medication containing oxycodone hydrochloride and acetaminophen (APAP, also known as paracetamol). This formulation leverages the complementary analgesic mechanisms of an opioid (oxycodone) and a non-opioid (acetaminophen) to provide effective pain relief for moderate to moderately severe pain.
  
  The inclusion of acetaminophen allows for lower doses of oxycodone while maintaining effective analgesia through different pain pathways. This combination approach may reduce some opioid-related side effects while enhancing overall pain control.
  
  Clinical Applications:
  
  • Acute pain management
  • Post-surgical pain
  • Dental procedure pain relief
  • Injury-related pain
  
  Available Formulations:
  
  • Tablet strengths (oxycodone/acetaminophen):
    - 2.5mg/325mg
    - 5mg/325mg
    - 7.5mg/325mg
    - 10mg/325mg
  
  Percocet is intended for short-term use, typically limited to 3-7 days for acute pain conditions. The acetaminophen component has a daily maximum limit (generally 3000-4000mg depending on guidelines) that must be considered when calculating total daily doses and when the patient is taking other acetaminophen-containing products.
      `,
    },
    {
      id: 112,
      name: "Heroin (Diacetylmorphine)",
      slug: "heroin-diacetylmorphine",
      category: "opioids",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744828893/download_2_cqs1yq.jpg",
      price: 100,
      quantity: 1,
      details: {
        1: 'Schedule I controlled substance (US)',
        2: 'No accepted medical use in the United States',
        3: 'Rapidly metabolizes to morphine in the body',
        4: 'Used medically in some countries as diamorphine'
      },
      des: `
  About Heroin (Diacetylmorphine)
  
  Heroin (diacetylmorphine) is a highly potent semi-synthetic opioid produced by acetylation of morphine. It is classified as a Schedule I controlled substance in the United States, indicating it has no currently accepted medical use, a high potential for abuse, and a lack of accepted safety protocols for use under medical supervision.
  
  The compound was originally synthesized in 1874 and marketed by Bayer Pharmaceutical Company in the late 19th century as a supposedly less addictive alternative to morphine. However, its high potency and rapid onset of action contribute to its significant abuse liability.
  
  Medical Status:
  
  • No approved medical indications in the United States
  • Used as "diamorphine" for pain management in some countries (UK, Switzerland)
  • Subject of research in supervised injection facilities in some nations
  • Historical use as an antitussive (cough suppressant)
  
  Pharmacological Properties:
  
  • Rapidly crosses the blood-brain barrier due to increased lipid solubility
  • Metabolized to 6-monoacetylmorphine and then to morphine
  • Typically 2-3 times more potent than morphine
  • Short half-life of approximately 30 minutes
  
  This substance is included for informational purposes only. The manufacturing, distribution, and possession of heroin are heavily restricted and carry severe legal penalties in most jurisdictions worldwide.
      `,
    },
  
    {
      id: 202,
      name: "LSD (Lysergic Acid Diethylamide)",
      slug: "lsd-lysergic-acid-diethylamide",
      category: "drugs",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744890169/6d126286-8283-4bf1-80d4-9b9ab3adc37a_xwxkdf.jpg", //use percocet img,
   
      price: 10,
      quantity: 1,
      details: {
        1: 'Schedule I controlled substance (US)',
        2: 'Semi-synthetic compound derived from ergot alkaloids',
        3: 'Long-acting psychedelic effects (8-12 hours)',
        4: 'Extremely potent with active doses in microgram range'
      },
      des: `
  About LSD (Lysergic Acid Diethylamide)
  
  LSD is a potent semi-synthetic psychedelic compound first synthesized in 1938 by Swiss chemist Albert Hofmann at Sandoz Laboratories. It is derived from ergot alkaloids found in the ergot fungus that grows on rye and other grains. LSD is classified as a Schedule I controlled substance in the United States and is subject to strict controls internationally.
  
  Known for its remarkable potency, LSD produces significant alterations in perception, mood, and cognitive processes at doses measured in micrograms. The typical recreational dose ranges from 50-150 micrograms, making it one of the most potent known psychoactive substances by weight.
  
  Effects and Characteristics:
  
  • Visual and sensory perceptual changes
  • Synesthesia (blending of sensory modalities)
  • Altered thought patterns and sense of time
  • Potential for mystical or transcendent experiences
  
  Pharmacological Properties:
  
  • Acts on multiple neurotransmitter systems, primarily serotonergic
  • Particularly high affinity for 5-HT2A receptors
  • Long duration of action (8-12 hours)
  • Rapid tolerance development that diminishes with abstinence
  
  LSD has been the subject of renewed scientific interest in recent years. Current research is investigating its potential therapeutic applications for conditions including depression, anxiety, addiction, and cluster headaches. Several clinical trials are examining LSD-assisted psychotherapy under controlled settings.
  
  This substance is included for informational purposes only. The manufacturing, distribution, and possession of LSD are heavily restricted and carry legal penalties in most jurisdictions worldwide.
      `,
    }, 
    {
      id: 204,
      name: "Ketamine (Ketalar)",
      slug: "ketamine-ketalar",
      category: "drugs",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744829857/download_3_ldw47n.jpg",
      price: 120,
      quantity: 1,
      details: {
        1: 'Schedule III controlled substance (US)',
        2: 'Dissociative anesthetic with medical applications',
        3: 'Increasingly used for treatment-resistant depression',
        4: 'Available as injectable solution, nasal spray, and tablets'
      },
      des: `
  About Ketamine (Ketalar)
  
  Ketamine is a dissociative anesthetic developed in 1962 and approved for medical use in 1970. Originally marketed under the brand name Ketalar, it remains an important medication in medical and veterinary practice due to its ability to produce anesthesia, sedation, and pain relief while generally preserving respiratory function.
  
  In recent years, ketamine has gained significant attention for its rapid antidepressant effects, leading to the FDA approval of esketamine (Spravato), an S-isomer of ketamine formulated as a nasal spray for treatment-resistant depression. At subanesthetic doses, ketamine produces altered states of consciousness characterized by dissociation, sensory changes, and in some cases, mystical-type experiences.
  
  Medical Applications:
  
  • Surgical anesthesia, particularly in field and emergency settings
  • Procedural sedation for minor surgeries
  • Treatment-resistant depression (intravenous infusions or esketamine nasal spray)
  • Pain management, especially for neuropathic pain conditions
  
  Available Formulations:
  
  • Injectable solution: 10mg/mL, 50mg/mL, 100mg/mL concentrations
  • Nasal spray (esketamine/Spravato): 28mg per device
  • Compounded oral and sublingual preparations (various concentrations)
  
  Pharmacological Properties:
  
  • Primary mechanism: Non-competitive NMDA receptor antagonism
  • Additional actions on opioid receptors, dopamine, and serotonin systems
  • Metabolized in the liver to norketamine (active metabolite)
  • Elimination half-life: 2-3 hours
  
  As a controlled substance with legitimate medical applications, ketamine is available by prescription and used in clinical settings. Off-label ketamine infusion clinics have become increasingly common for treating mood disorders, though these applications continue to be studied for long-term efficacy and safety.
      `,
    },
    {
      id: 304,
      name: "Diazepam (Valium)",
      slug: "diazepam-valium",
      category: "drugs",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832240/download_4_lutqh4.jpg",
      price: 55,
      quantity: 1,
      details: {
        1: 'Schedule IV controlled substance (US)',
        2: 'Long-acting benzodiazepine',
        3: 'Multiple therapeutic applications',
        4: 'Available in multiple formulations'
      },
      des: `
  About Diazepam (Valium)
  
  Diazepam, marketed under the brand name Valium, is a long-acting benzodiazepine medication with multiple therapeutic applications. It's commonly prescribed for anxiety disorders, muscle spasms, seizures, and alcohol withdrawal symptoms.
  
  As a Schedule IV controlled substance in the United States, diazepam has a lower potential for abuse compared to Schedule II or III substances, but still requires careful medical supervision and responsible use.
  
  Clinical Applications:
  
  • Anxiety disorders
  • Muscle spasms
  • Seizure disorders
  • Alcohol withdrawal
  • Pre-operative sedation
  
  Pharmacological Properties:
  
  • Long half-life (20-100 hours)
  • Active metabolites
  • Multiple administration routes
  • Gradual onset of action
  
  Due to its long half-life and active metabolites, diazepam has a lower risk of rebound and interdose withdrawal compared to shorter-acting benzodiazepines. However, it still carries risks of dependence and cognitive impairment with long-term use. As with all benzodiazepines, discontinuation should involve gradual tapering to minimize withdrawal symptoms.
      `,
    },
    {
      id: 305,
      name: "Clonazepam (Klonopin)",
      slug: "clonazepam-klonopin",
      category: "Pills",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832255/images_3_zbnfnr.jpg",
      price: 65,
      quantity: 1,
      details: {
        1: 'Schedule IV controlled substance (US)',
        2: 'Intermediate to long-acting benzodiazepine',
        3: 'Originally developed as an anticonvulsant',
        4: 'Used for anxiety disorders and epilepsy'
      },
      des: `
  About Clonazepam (Klonopin)
  
  Clonazepam, marketed under the brand name Klonopin, is a benzodiazepine medication with both anticonvulsant and anxiolytic properties. Originally developed as an anticonvulsant, it's now commonly prescribed for various anxiety disorders and epilepsy.
  
  As a Schedule IV controlled substance in the United States, clonazepam has a lower potential for abuse compared to Schedule II or III substances, but still requires careful medical supervision and responsible use.
  
  Clinical Applications:
  
  • Panic disorder
  • Generalized anxiety disorder
  • Epilepsy
  • Seizure disorders
  • Social anxiety disorder
  
  Pharmacological Properties:
  
  • Intermediate to long half-life (18-50 hours)
  • High potency
  • Gradual onset of action
  • Multiple administration routes
  
  Clonazepam's longer duration of action makes it useful for conditions requiring sustained anxiolysis or seizure protection, with less frequent dosing than shorter-acting alternatives. However, this also means that the medication may accumulate in the body with repeated dosing, potentially leading to more complex withdrawal profiles with long-term use.
      `,
    },
    {
      id: 401,
      name: "200mg Brownie",
      slug: "200mg-brownie",
      category: "edibles",  
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832272/download_5_rz1rgj.jpg",
      quantity: 1,
      details: {
        1: '200mg total cannabinoid content',
        2: 'Chocolate brownie edible',
        3: 'Classic cannabis-infused baked good',
        4: 'Individual serving'
      },
      des: `
  About 200mg Brownie
  
  Our cannabis-infused chocolate brownie combines rich, fudgy texture with precision-dosed cannabinoids for a classic edible experience. Each brownie contains 200mg of total cannabinoids, carefully infused to ensure consistent potency throughout.
  
  Product Highlights:
  • 200mg total cannabinoid content
  • Rich chocolate flavor with fudgy texture
  • Made with premium cocoa and high-quality cannabis extract
  • Individually wrapped for freshness and portability
  
  Consumption Guidance:
  Edibles can produce stronger and longer-lasting effects compared to inhalation methods. Effects typically begin 30-90 minutes after consumption and may last 4-8 hours depending on individual factors. For those new to edibles, starting with a small portion (5-10mg) is recommended.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include chocolate, flour, sugar, eggs, butter, cannabis extract, and natural flavors. Specific allergen information available upon request.
      `,
    },
    {
      id: 402,
      name: "200mg Cereal Treat",
      slug: "200mg-cereal-treat",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832737/download_6_tl3erd.jpg",
      quantity: 1,
      details: {
        1: '200mg total cannabinoid content',
        2: 'Rice cereal and marshmallow treat',
        3: 'Sweet, nostalgic snack',
        4: 'Individual serving'
      },
      des: `
  About 200mg Cereal Treat
  
  Our cannabis-infused cereal treat combines crunchy rice cereal and gooey marshmallow into a nostalgic, sweet snack. Each treat contains 200mg of total cannabinoids, evenly distributed throughout the confection for consistent dosing.
  
  Product Highlights:
  • 200mg total cannabinoid content
  • Classic crispy rice cereal and marshmallow combination
  • Sweet, chewy texture with satisfying crunch
  • Individually wrapped for freshness and portability
  
  Consumption Guidance:
  Edibles can produce stronger and longer-lasting effects compared to inhalation methods. Effects typically begin 30-90 minutes after consumption and may last 4-8 hours depending on individual factors. For those new to edibles, starting with a small portion (5-10mg) is recommended.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include crisp rice cereal, marshmallow, butter, cannabis extract, and natural flavors. Specific allergen information available upon request.
      `,
    },
    
    {
      id: 404,
      name: "20mg Lollipop",
      slug: "lollipop",
      category: "edibles",
   img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832925/download_7_b731h5.jpg",  
      quantity: 1,
      details: {
        1: 'Hard candy confection',
        2: 'Long-lasting candy experience',
        3: 'Individual serving on a stick',
        
      },
      des: `
  About 200mg Lollipop
  
  Our cannabis-infused lollipop delivers cannabinoids in a slow-dissolving hard candy format. Each lollipop contains 200mg of total cannabinoids, evenly distributed throughout the candy for a consistent experience from start to finish.
  
  Product Highlights:
  • 20mg total cannabinoid content
  • Hard candy format for slower consumption
  • Long-lasting flavor profile
  • Convenient stick handle for easy consumption
  • Delta 9

  
  Consumption Guidance:
  Sublingual absorption may occur while consuming this product, potentially leading to faster onset of effects than traditional edibles. Primary effects typically begin 30-90 minutes after consumption and may last 4-8 hours depending on individual factors. For those new to edibles, consuming small portions over time is recommended.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight and heat. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include sugar, corn syrup, cannabis extract, citric acid, and natural flavors and colors. Specific flavor profiles and allergen information available upon request.
      `,
    },
    {
      id: 407,
      name: "200mg Pie",
      slug: "200mg-pie",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832963/download_8_shdn3p.jpg",
      quantity: 1,
      details: {
        1: '200mg total cannabinoid content',
        2: 'Pastry dessert with filling',
        3: 'Sweet baked good with flaky crust',
        4: 'Individual serving size'
      },
      des: `
  About 200mg Pie
  
  Our cannabis-infused mini pie features a flaky, buttery crust surrounding a sweet filling for a classic dessert experience. Each individual pie contains 200mg of total cannabinoids, carefully incorporated for consistent potency in every bite.
  
  Product Highlights:
  • 200mg total cannabinoid content
  • Flaky pastry crust with sweet filling
  • Available in assorted flavors (varies by location)
  • Individually packaged for freshness and portability
  
  Consumption Guidance:
  Edibles can produce stronger and longer-lasting effects compared to inhalation methods. Effects typically begin 30-90 minutes after consumption and may last 4-8 hours depending on individual factors. For those new to edibles, starting with a small portion (5-10mg) is recommended.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. For extended freshness, refrigeration is recommended. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include flour, butter, sugar, fruit or cream fillings, cannabis extract, and natural flavors. Specific flavor varieties and allergen information available upon request.
      `,
    },
    {
      id: 408,
      name: "200mg Pop Corn - Caramel Corn",
      slug: "200mg-pop-corn-caramel-corn",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832968/download_9_lzq2gq.jpg",
      quantity: 1,
      details: {
        1: '200mg total cannabinoid content',
        2: 'Popcorn coated with caramel',
        3: 'Sweet and crunchy snack',
        4: 'Individual serving package'
      },
      des: `
  About 200mg Pop Corn - Caramel Corn
  
  Our cannabis-infused caramel corn combines freshly popped corn with a rich, sweet caramel coating for a delightful crunchy treat. Each package contains 200mg of total cannabinoids, evenly distributed throughout the caramel coating for consistent dosing.
  
  Product Highlights:
  • 200mg total cannabinoid content
  • Sweet caramel coating on crunchy popcorn
  • Perfect balance of sweetness and salt
  • Convenient, resealable packaging
  
  Consumption Guidance:
  Edibles can produce stronger and longer-lasting effects compared to inhalation methods. Effects typically begin 30-90 minutes after consumption and may last 4-8 hours depending on individual factors. For those new to edibles, starting with a small portion (5-10mg) is recommended.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. Store in the original sealed packaging to maintain freshness and crunch. Keep out of reach of children and pets.
  
  Ingredients may include popcorn, sugar, butter, corn syrup, cannabis extract, and natural flavors. Specific allergen information available upon request.
      `,
    },   
    {
      id: 412,
      name: "300mg Blue Razz Rings",
      slug: "300mg-blue-razz-rings",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832977/download_10_fn3xt6.jpg",
      price: 30,
      quantity: 1,
      details: {
        1: '300mg total cannabinoid content',
        2: 'Blue raspberry flavored gummy rings',
        3: 'Chewy candy format',
        4: 'Higher potency edible'
      },
      des: `
  About 300mg Blue Razz Rings
  
  Our Blue Razz Rings deliver a higher-potency edible experience in a familiar gummy candy format. Each package contains gummy rings with a total of 300mg cannabinoids, featuring a sweet and tangy blue raspberry flavor profile.
  
  Product Highlights:
  • 300mg total cannabinoid content
  • Blue raspberry flavor with balanced sweetness and tartness
  • Chewy gummy ring format
  • Multiple pieces per package for easy dose control
  
  Consumption Guidance:
  These gummies contain a higher cannabinoid concentration than our standard products. Effects typically begin 30-90 minutes after consumption and may last 6-8 hours depending on individual factors. For precise dosing, consider dividing gummies into smaller portions. Each piece contains approximately 10-15mg, but may vary slightly.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. For extended shelf life, refrigeration is recommended but not required. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include glucose syrup, sugar, gelatin or pectin, citric acid, natural and artificial flavors, blue food coloring, cannabis extract, and other ingredients. Specific allergen information available upon request.
      `,
    },
   
    {
      id: 414,
      name: "300mg Rainbow Belts",
      slug: "300mg-rainbow-belts",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832985/image_t3ljoe.jpg",
      price: 30,
      quantity: 1,
      details: {
    
        1: 'Multi-colored, multi-flavored gummy belts',
        2: 'Chewy, colorful candy format',
        3: 'Higher potency edible'
      },
      des: `
  About 300mg Rainbow Belts
  
  Our Rainbow Belts offer a vibrant, multi-flavored cannabis experience. Each package contains gummy belt strips with a total of 300mg cannabinoids, featuring assorted fruit flavors in a colorful, sugar-coated format.
  
  Product Highlights:
  • 300mg total cannabinoid content
  • Multiple fruit flavors in each package
  • Colorful, chewy gummy belt format
  • Strips can be easily divided for precise dosing
  
  Consumption Guidance:
  These gummies contain a higher cannabinoid concentration than our standard products. Effects typically begin 30-90 minutes after consumption and may last 6-8 hours depending on individual factors. Rainbow Belts are designed to be easily portioned - each belt can be cut or torn into smaller pieces for controlled dosing.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. For extended shelf life, refrigeration is recommended but not required. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include glucose syrup, sugar, gelatin or pectin, citric acid, natural and artificial fruit flavors, various food colorings, cannabis extract, and other ingredients. Specific allergen information available upon request.
      `,
    },
    {
      id: 415,
      name: "300mg Sour Patch Belts",
      slug: "300mg-sour-patch-belts",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744832997/zexJLifRp2igOmzKI2vw_Crue_IMages6402_zyzned.jpg",
      price: 30,
      quantity: 1,
      details: {
        1: '300mg total cannabinoid content',
        2: 'Sour-coated gummy belt candy',
        3: 'Tangy, sweet-and-sour flavor profile',
        4: 'Higher potency edible'
      },
      des: `
  About 300mg Sour Patch Belts
  
  Our Sour Patch Belts combine the popular sour-then-sweet flavor profile with cannabis infusion. Each package contains sour-coated gummy belts with a total of 300mg cannabinoids, delivering a tangy, mouth-puckering experience.
  
  Product Highlights:
  • 300mg total cannabinoid content
  • Sour powder coating with sweet gummy interior
  • Flexible strips that can be easily portioned
  • Perfect for those who prefer tangy over sweet
  
  Consumption Guidance:
  These gummies contain a higher cannabinoid concentration than our standard products. Effects typically begin 30-90 minutes after consumption and may last 6-8 hours depending on individual factors. For precise dosing, consider cutting belts into smaller portions. The sour coating may contain a higher concentration of cannabinoids than the interior gummy.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. For extended shelf life, refrigeration is recommended but not required. Store in the original sealed packaging to maintain freshness, potency, and sour coating integrity. Keep out of reach of children and pets.
  
  Ingredients may include glucose syrup, sugar, gelatin or pectin, citric acid, malic acid, tartaric acid, natural and artificial flavors, food coloring, cannabis extract, and other ingredients. Specific allergen information available upon request.
      `,
    },

    {
      id: 418,
      name: "Cake",  
      slug: "cake",
      category: "edibles",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833194/IMG_2551_dp1xgn.webp",
      price: 35,
      quantity: 1,
      details: {
        1: '350mg total cannabinoid content',
        2: 'Cake-style baked edible',
        3: 'Moist, sweet dessert format',
        4: 'Highest potency tier product'
      },
      des: `
  About 350mg Cake
  
  Our cannabis-infused cake delivers a premium dessert experience with our highest potency tier. Each individual cake contains 350mg of total cannabinoids, expertly infused throughout the batter for consistent effects in every bite.
  
  Product Highlights:
  • 350mg total cannabinoid content
  • Moist, tender cake texture
  • Available in various flavors (varies by location)
  • Premium dessert experience
  
  Consumption Guidance:
  This product contains our highest standard cannabinoid concentration. Effects typically begin 30-90 minutes after consumption and may last 6-8+ hours depending on individual factors. Due to the high potency, this product is intended to be consumed in multiple sessions or shared. For new users, a portion containing no more than 5-10mg is recommended for initial trials.
  
  Storage:
  Keep in a cool, dry place away from direct sunlight. For best freshness, refrigeration is recommended. Freezing is acceptable for long-term storage. Store in the original sealed packaging to maintain freshness and potency. Keep out of reach of children and pets.
  
  Ingredients may include flour, sugar, eggs, butter or oil, cannabis extract, and natural flavors. Specific flavor varieties and allergen information available upon request.
      `,
    },
    {
      id: 503,
      name: "1g Wax",
      slug: "1g-wax-concentrate",
      category: "Concentrates",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833210/What-Is-Marijuana-Wax-FTR_d2nrqz.jpg",
      price: 24,
      quantity: 1,
      details: {
        1: 'Standard cannabis wax concentrate',
        2: 'High potency extract (typically 65-85% cannabinoids)',
        3: 'Opaque, textured appearance',
        4: 'Versatile concentrate form'
      },
      des: `
  About 1g Wax
  
  Cannabis wax is a versatile concentrate known for its opaque appearance and malleable texture. This 1-gram unit delivers high potency in a form that's easier to handle than more brittle concentrates, making it popular among both newcomers and experienced concentrate consumers.
  
  Product Highlights:
  • Soft to firm consistency depending on specific variety
  • Opaque, creamy to crumbly texture
  • More stable at room temperature than oils
  • Typically ranges from 65-85% total cannabinoids
  • Good balance of potency and ease of handling
  
  Production Method:
  Wax is produced through hydrocarbon extraction (typically butane or propane) with specific temperature and pressure controls during the purging process. The material undergoes agitation or specific temperature treatments during processing that cause the cannabinoids to crystallize, creating the opaque, textured appearance. This process helps preserve a robust terpene profile while creating a user-friendly consistency.
  
  Consumption Guidance:
  This concentrate is designed for vaporization at precise temperatures, typically using a dab rig, electronic nail, or specialized vaporizer. The workable texture allows for easy portioning with dab tools. Due to its high potency, very small amounts are recommended, particularly for those new to concentrates.
  
  Storage:
  Store in a cool, dark place in an airtight, non-stick silicone or glass container. While refrigeration can help preserve terpenes longer, wax concentrates are generally stable at room temperature and easier to handle when not cold.
      `,
    },
    {
      id: 504,
      name: "1g Butane Wax",
      slug: "1g-butane-wax-concentrate",
      category: "Concentrates", 
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833551/shutterstock_628310576-3_w1kyw5.jpg",
      quantity: 1,
      details: {
        1: 'BHO (Butane Hash Oil) concentrate',
        2: 'Entry-level price point option',
        3: 'Specifically labeled extraction method',
        4: 'Wax consistency'
      },
      des: `
  About 1g Butane Wax
  
  Butane wax is our entry-level concentrate option, offering good potency at an accessible price point. This 1-gram unit is produced specifically using butane hydrocarbon extraction, resulting in a standard wax consistency that's versatile and easy to work with.
  
  Product Highlights:
  • Value-oriented concentrate option
  • Standard butane extraction (BHO)
  • Opaque, waxy consistency
  • Typically ranges from 60-75% total cannabinoids
  • Good introduction to cannabis concentrates
  
  Production Method:
  This product is created through the industry-standard closed-loop butane extraction process, where the solvent strips cannabinoids and terpenes from plant material. It undergoes proper purging to remove residual solvents while developing its characteristic wax consistency. This cost-effective method allows for a more accessible price point while maintaining quality standards.
  
  Consumption Guidance:
  This concentrate is designed for vaporization at precise temperatures, typically using a dab rig, electronic nail, or specialized vaporizer. The manageable texture makes it suitable for beginners to concentrates. Due to its potency, very small amounts are recommended for initial use.
  
  Storage:
  Store in a cool, dark place in an airtight, non-stick silicone or glass container. While refrigeration can help preserve freshness longer, this concentrate is stable at room temperature and easier to handle when not cold.
      `,
    },
    {
      id: 505,
      name: "1g CO2 Wax",
      
      slug: "1g-co2-wax-concentrate",
      category: "Concentrates",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833632/unnamed_ltnruf.png",
      quantity: 1,
      details: {
        1: 'CO2 extraction method',
        2: 'Solventless extraction alternative',
        3: 'Mid-tier price point option',
        4: 'Wax consistency'
      },
      des: `
  About 1g CO2 Wax
  
  CO2 wax offers consumers a concentrate option produced without traditional hydrocarbon solvents. This 1-gram unit is created using supercritical carbon dioxide extraction, resulting in a clean product with well-preserved terpene profiles at a mid-range price point.
  
  Product Highlights:
  • Produced without hydrocarbon solvents
  • Environmentally friendlier extraction method
  • Clean flavor profile
  • Typically ranges from 65-80% total cannabinoids
  • Popular alternative for the health-conscious consumer
  
  Production Method:
  This concentrate is produced using supercritical CO2 extraction, which uses pressure and carbon dioxide as the extraction medium rather than hydrocarbon solvents. The process can be precisely tuned to target specific compounds, resulting in a clean extract that requires minimal post-processing. The resulting oil is then processed into a wax consistency through controlled temperature manipulation, providing an accessible texture while maintaining the benefits of CO2 extraction.
  
  Consumption Guidance:
  This concentrate is designed for vaporization at precise temperatures, typically using a dab rig, electronic nail, or specialized vaporizer. Many consumers prefer CO2 extracts for their clean flavor profile and solventless production method. Due to its potency, very small amounts are recommended, particularly for those new to concentrates.
  
  Storage:
  Store in a cool, dark place in an airtight, non-stick silicone or glass container. While refrigeration can help preserve terpenes longer, room temperature storage is acceptable for short-term use. The absence of residual hydrocarbons makes this product somewhat more stable than BHO concentrates.
      `,
    },
  
  
    {
      id: 601,
      name: "Absolute Extracts OG Kush",
      slug: "absolute-extracts-og-kush-vape",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833552/9be70557-9c52-4ee2-a668-8021689f3b7f_oa2egl.webp",
      price: 35,
      quantity: 1,
      details: {
        1: 'THC content: 70.21%',
        2: 'Strain: OG Kush',
        3: 'High potency extract',
        4: 'Brand: Absolute Extracts'
      },
      des: `
  About Absolute Extracts OG Kush
  
  This premium cannabis oil cartridge from Absolute Extracts features the classic OG Kush strain, known for its legendary status among cannabis enthusiasts. With a verified THC content of 70.21%, this cartridge delivers potent effects in a convenient, ready-to-use format.
  
  Product Highlights:
  • High-potency cannabis oil (70.21% THC)
  • Strain-specific extraction preserving the authentic OG Kush profile
  • Full-spectrum extract containing natural cannabis terpenes
  • Compatible with standard 510-thread batteries
  • Consistent dosing and effects
  
  Strain Information:
  OG Kush is a legendary strain known for its distinctive aroma combining notes of fuel, skunk, and spice. The effects typically include deep relaxation with euphoria, making it popular for evening use. The strain has become a cornerstone of cannabis culture and breeding programs.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). Start with a small inhalation, especially if sensitive to THC or new to high-potency products. Wait 5-10 minutes between inhalations to gauge effects. The high THC content makes this product best suited for consumers with established tolerance.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. For maximum preservation of potency and flavor, avoid leaving in extremely hot environments such as cars during summer.
      `,
    },
  
    {
      id: 603,
      name: "Eureka Blue Dream Sativa",
      slug: "eureka-blue-dream-sativa-vape",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833555/CBD_ClearTip_2-min_xccbea.webp",
      price: 28,
      quantity: 1,
      details: {
        1: 'THC content: 53.63%',
        2: 'Strain: Blue Dream (Sativa)',
        3: 'Mid-high potency extract',
        4: 'Brand: Eureka'
      },
      des: `
  About Eureka Blue Dream Sativa
  
  This Eureka cartridge features the beloved Blue Dream strain in a convenient vaporizer format. Testing at 53.63% THC, this sativa-dominant extract delivers the strain's characteristic effects with moderate-to-high potency in a reliable cartridge form.
  
  Product Highlights:
  • Sativa-dominant Blue Dream extract (53.63% THC)
  • Strain-specific terpene profile
  • Balanced potency suitable for various experience levels
  • Compatible with standard 510-thread batteries
  • Produced by established brand Eureka
  
  Strain Information:
  Blue Dream is a popular sativa-dominant hybrid known for its balanced effects that blend cerebral stimulation with gentle body relaxation. The strain typically exhibits a sweet berry aroma inherited from its Blueberry lineage, combined with the energetic qualities of Haze genetics. Blue Dream is often appreciated for daytime use due to its uplifting qualities that don't typically overwhelm users.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). The moderate-high potency makes this more accessible than very high THC products, but new users should still start with a small inhalation. Wait 5-10 minutes between draws to assess effects before continuing.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. Avoid leaving in extremely hot environments to preserve potency and prevent leakage.
      `,
    },
 
    {
      id: 605,
      name: "Tetra Gold Classic",
      slug: "tetra-gold-classic-vape",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744837412/529_E43Q_large_Home_product_Gold_Cart_uknwtb.jpg",
      quantity: 1,
      details: {
        1: 'THC content: 46.58%',
        2: 'Classic blend',
        3: 'Mid-range potency extract',
        4: 'Brand: Tetra Gold'
      },
      des: `
  About Tetra Gold Classic
  
  Tetra Gold Classic offers a reliable cannabis experience at an accessible price point. With 46.58% THC, this mid-range potency cartridge provides balanced effects in a consistent, value-oriented product.
  
  Product Highlights:
  • Moderate potency cannabis oil (46.58% THC)
  • Balanced cannabinoid profile
  • Entry-level price point
  • Compatible with standard 510-thread batteries
  • Consistent quality from batch to batch
  
  Brand Information:
  Tetra Gold focuses on delivering reliable cannabis extracts at competitive price points. Their Classic line features standard blends with verified potency, making them a good option for those seeking quality without premium pricing.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). The moderate THC level makes this product more approachable for those with average tolerance. Start with a small inhalation and wait 5-10 minutes between draws to assess effects. The balanced potency makes this suitable for various consumption occasions.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. Avoid leaving in extremely hot environments to preserve potency and prevent leakage.
      `,
    },
    {
      id: 608,
      name: "Honey Vape GG4",
      slug: "honey-vape-gg4-vape",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833664/large_ign8sf.jpg",
      quantity: 1,
      details: {
        1: 'Strain: GG4 (Gorilla Glue #4)',
        2: 'Value-priced option',
        3: 'Known for smooth oil consistency',
        4: 'Brand: Honey Vape'
      },
      des: `
  About Honey Vape GG4
  
  Honey Vape presents their take on the powerful GG4 (formerly known as Gorilla Glue #4) strain in their signature smooth-hitting oil formula. This cartridge delivers the strain's renowned potent effects at an accessible price point.
  
  Product Highlights:
  • GG4 strain-specific cannabis oil
  • Smooth, consistent oil formulation
  • Value-oriented pricing
  • Compatible with standard 510-thread batteries
  • Produced by established brand Honey Vape
  
  Strain Information:
  GG4 (Gorilla Glue #4) is a hybrid strain that gained fame for its high potency and distinctive effects that leave users feeling "glued" to the couch. The strain typically exhibits a complex aroma blending earthy coffee notes with hints of pine and chocolate. GG4 is known for producing powerful relaxation with euphoric elements, making it popular for unwinding.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). While modestly priced, GG4 extracts can be quite potent, so start with a small inhalation, especially if new to this strain. Wait 5-10 minutes between draws to assess effects. The relaxing properties make this product most suitable for leisure time or evening use.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. Avoid leaving in extremely hot environments to preserve potency and prevent leakage.
      `,
    },
    {
      id: 602,
      name: "Pure Cure",
      slug: "pure-cure-vape",
      category: "vapes",
       img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833555/CBD_ClearTip_2-min_xccbea.webp",
      price: 35,
      quantity: 1,
      details: {
        1: 'THC content: 71.72%',
        2: 'High potency extract',
        3: 'Premium cannabis oil',
        4: 'Brand: Pure Cure'
      },
      des: `
  About Pure Cure
  
  Pure Cure delivers a premium cannabis extract with exceptional potency, testing at 71.72% THC. This high-quality oil cartridge provides potent effects and a clean, refined experience in a convenient form factor.
  
  Product Highlights:
  • Superior potency cannabis oil (71.72% THC)
  • Clean, refined extraction process
  • Full-spectrum oil preserving natural cannabis compounds
  • Compatible with standard 510-thread batteries
  • Consistent dosing and reliable effects
  
  Brand Information:
  Pure Cure focuses on creating clean, high-potency cannabis extracts with meticulous attention to quality. Their extraction process aims to preserve the full spectrum of cannabinoids and terpenes while removing unwanted plant materials and impurities, resulting in a refined product that delivers pure effects.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). Due to its high potency, start with a very small inhalation, especially if sensitive to THC or new to concentrated products. Wait 5-10 minutes between inhalations to gauge effects. This high-THC product is intended for consumers with established tolerance.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. For maximum preservation of potency and flavor, avoid leaving in extremely hot environments such as cars during summer.
      `,
    },
   {
      id: 609,
      name: "Stiiizy Granddaddy Purp",
      slug: "stiiizy-granddaddy-purp-vape",
      category: "vapes",
      img: "/stiiizy-granddaddy-purp.jpeg",
      price: 25,
      quantity: 1,
      details: {
        1: 'Strain: Granddaddy Purple',
        2: 'Pod system (requires Stiiizy battery)',
        3: 'Proprietary pod format',
        4: 'Brand: Stiiizy'
      },
      des: `
  About Stiiizy Granddaddy Purp
  
  This Stiiizy pod features the legendary Granddaddy Purple strain in the brand's proprietary pod system. Known for their sleek design and reliable performance, Stiiizy delivers the classic GDP experience in their signature easy-to-use format.
  
  Product Highlights:
  • Granddaddy Purple strain-specific formulation
  • Proprietary pod system design
  • No-button operation with compatible Stiiizy battery
  • Consistent vapor production
  • Popular California brand known for quality
  
  Strain Information:
  Granddaddy Purple (GDP) is a famous indica strain known for its distinctive appearance and effects. The strain typically exhibits sweet grape and berry flavors with earthy undertones. Effects are characteristically indicative, often producing deep physical relaxation and a sense of tranquility. GDP is frequently chosen for evening use and relaxation.
  
  Consumption Guidance:
  This product requires a Stiiizy battery (sold separately) and is not compatible with standard 510-thread batteries. The pod system provides easy operation—simply inhale to activate. Start with a small draw and wait 5-10 minutes between inhalations to gauge effects. The indica properties make this most suitable for relaxation and evening use.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the pod in its original packaging when not in use to protect the intake holes. The proprietary pod design helps prevent leakage, but extreme heat should still be avoided to maintain oil quality.
      `,
    },
    {
      id: 610,
      name: "Gold Drop Gold Standard",
      slug: "gold-drop-gold-standard-vape",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833669/images_4_viobqg.jpg",
      price: 25,
      quantity: 1,
      details: {
        1: 'Premium extract brand',
        2: 'High-quality refined oil',
        3: 'Standard line from premium manufacturer',
        4: 'Brand: Gold Drop'
      },
      des: `
  About Gold Drop Gold Standard
  
  Gold Drop's Gold Standard line represents a balance between premium quality and accessible pricing from one of the cannabis industry's respected extract producers. This cartridge delivers refined cannabis oil with consistent effects and flavor.
  
  Product Highlights:
  • High-quality refined cannabis oil
  • Balanced potency-to-price ratio
  • Clean, consistent extraction
  • Compatible with standard 510-thread batteries
  • From award-winning extract producer Gold Drop
  
  Brand Information:
  Gold Drop has built a reputation for creating premium cannabis extracts using refined techniques. Their Gold Standard line offers their extraction expertise at a more accessible price point than their ultra-premium offerings, while maintaining their commitment to quality and consistency.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). The refined oil likely provides substantial effects with clean flavor. Start with a small inhalation and wait 5-10 minutes between draws to assess effects. The Gold Standard line aims to provide reliable effects for regular cannabis consumers.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. Avoid leaving in extremely hot environments to preserve the refined oil's potency and flavor profile.
      `,
    },
    {
      id: 611,
      name: "Brass Knuckles THC Oil Cartridges",
      slug: "brass-knuckles-thc-oil-cartridges-vape",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833677/51rRkECB4XL_wsgoep.jpg",
      price: 35,
      quantity: 1,
      details: {
        1: 'Premium high-potency brand',
        2: 'High-end hardware and oil',
        3: 'Known for potent effects',
        4: 'Brand: Brass Knuckles'
      },
      des: `
  About Brass Knuckles THC Oil Cartridges
  
  Brass Knuckles is renowned for providing potent cannabis oil cartridges with distinctive hardware design. This premium product delivers powerful effects and represents the higher end of the vape cartridge market.
  
  Product Highlights:
  • Premium, high-potency cannabis oil
  • Distinctive cartridge hardware with improved airflow
  • Strong, long-lasting effects
  • Compatible with standard 510-thread batteries
  • Established brand known for potency
  
  Brand Information:
  Brass Knuckles has built a reputation for creating some of the more potent vape products on the market. Their cartridges typically feature higher cannabinoid content and distinctive hardware designed to maximize vapor production and oil delivery. The brand focuses on delivering powerful effects for experienced consumers.
  
  Consumption Guidance:
  This cartridge requires a compatible battery (sold separately). Due to the brand's reputation for potency, start with a very small inhalation, especially if new to high-potency products. Wait 5-10 minutes between draws to assess effects. Brass Knuckles products are best suited for experienced cannabis consumers with established tolerance.
  
  Storage:
  Store upright in a cool, dark place away from direct sunlight and heat sources. Keep the mouthpiece clean and covered when not in use. For maximum preservation of potency and flavor, avoid leaving in extremely hot environments such as cars during summer.
      `,
    },
    {
      id: 701,
      name: "KandyPens Special K Vaporizer",
      slug: "kandypens-special-k-vaporizer",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833686/kandypens_special_k_black_vaporizer_apart_1024x1024_zwxcvr.webp",
      price: 60,
      quantity: 1,
      details: {
        1: 'Premium vaporizer pen',
        2: 'Compatible with concentrates',
        3: 'High-end hardware',
        4: 'Brand: KandyPens'
      },
      des: `
  About KandyPens Special K Vaporizer
  
  The KandyPens Special K Vaporizer represents premium concentrate consumption technology in a portable, pen-style format. This high-quality device delivers exceptional vapor production and flavor from various cannabis concentrates.
  
  Product Highlights:
  • Premium concentrate vaporizer
  • Multiple temperature settings for customized experience
  • Quartz or ceramic heating chamber options
  • Long-lasting battery with USB charging
  • Sleek, discreet design for portability
  
  Technical Specifications:
  The Special K typically features a powerful battery with multiple heat settings, allowing users to customize their experience based on the concentrate being used and desired effects. The heating chamber is designed for efficient vaporization of concentrates like wax, shatter, budder, and similar extracts. Premium materials throughout ensure durability and clean flavor.
  
  Usage Guidance:
  This device is designed for use with cannabis concentrates only—not for dry herb or oil cartridges. Load a small amount of concentrate (rice grain size) directly into the heating chamber. Press the button to activate heating while inhaling slowly and steadily. Clean the chamber regularly for optimal performance and flavor.
  
  What's Included:
  • Special K vaporizer device
  • USB charging cable
  • Concentrate tool
  • Cleaning supplies
  • Instruction manual
  • Warranty card
      `,
    },
    {
      id: 702,
      name: "Canna Blast Vape Pen Kit",
      slug: "canna-blast-vape-pen-kit",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833691/images_5_thgbuk.jpg",
      price: 60,
      quantity: 1,
      details: {
        1: 'Complete starter kit',
        2: 'Versatile vaporizer system',
        3: 'Multiple attachments included',
        4: 'Brand: Canna Blast'
      },
      des: `
  About Canna Blast Vape Pen Kit
  
  The Canna Blast Vape Pen Kit provides a comprehensive vaping solution with versatility for different cannabis consumption preferences. This complete kit includes multiple attachments and accessories to accommodate various products and consumption styles.
  
  Product Highlights:
  • All-in-one starter kit for cannabis vaporization
  • Multiple attachments for different consumption methods
  • Powerful battery with variable voltage settings
  • Complete accessory package
  • Suitable for beginners and experienced users alike
  
  Technical Specifications:
  The Canna Blast kit typically features a high-capacity rechargeable battery with variable voltage capabilities to accommodate different cartridges and attachments. The kit includes components for concentrates and cartridge use, with user-friendly controls designed for intuitive operation. The modular design allows for customization based on user preferences.
  
  Usage Guidance:
  This versatile kit can be configured for various cannabis products. For cartridges, simply attach the compatible cartridge to the battery and inhale (some models require button activation). For concentrates, use the included concentrate attachment following the specific loading instructions. Refer to the included manual for detailed usage instructions for each component.
  
  What's Included:
  • Canna Blast battery
  • Cartridge attachment
  • Concentrate attachment
  • USB charging cable
  • Storage case
  • Loading/cleaning tools
  • Comprehensive instruction manual
      `,
    },

    {
      id: 704,
      name: "V2 Pro Series 3 Vaporizer",
      slug: "v2-pro-series-3-vaporizer",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833699/v2-pro-series-3-vaporizer-review-vape-pen-wax-herbal-oil-vaporplants-vapor-box-charger_urjure.jpg",
      price: 55,
      quantity: 1,
      details: {
        1: 'Multi-purpose vaporizer',
        2: '3-in-1 compatibility',
        3: 'Magnetic connections',
        4: 'Brand: V2'
      },
      des: `
  About V2 Pro Series 3 Vaporizer
  
  The V2 Pro Series 3 is a versatile multi-purpose vaporizer featuring interchangeable cartridges for different materials. This innovative device accommodates various cannabis products with a simple magnetic cartridge system and intuitive operation.
  
  Product Highlights:
  • 3-in-1 capability with interchangeable cartridges
  • Magnetic connections for easy cartridge swapping
  • Smart technology recognizes different cartridge types
  • Single-button operation
  • Compact design for portability
  
  Technical Specifications:
  The V2 Pro Series 3 features a 650mAh battery with pass-through charging capability, allowing use while charging. The device automatically detects which type of cartridge is inserted and adjusts settings accordingly. The magnetic connections eliminate threading issues and make changing between materials quick and simple.
  
  Usage Guidance:
  Different cartridges are used depending on your preferred material. For oils, use the liquid cartridge; for concentrates, use the concentrate cartridge; for dry herb, use the loose leaf cartridge (cartridges may be sold separately). Each cartridge type has specific loading instructions detailed in the user manual. The device is activated by pressing the button while inhaling.
  
  What's Included:
  • V2 Pro Series 3 battery
  • Magnetic charging cable
  • At least one cartridge (specific types may vary)
  • Cleaning tools
  • User manual
  • Warranty card
      `,
    },

    {
      id: 706,
      name: "XEO Void",
      slug: "xeo-void-vaporizer",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833705/black__01030_phtci9.jpg",
      price: 40,
      quantity: 1,
      details: {
        1: 'All-in-one system',
        2: 'Leak-resistant design',
        3: 'Versatile performance',
        4: 'Brand: XEO'
      },
      des: `
  About XEO Void
  
  The XEO Void is an all-in-one vaporizer system known for its leak-resistant design and versatile performance capabilities. This integrated device provides a self-contained solution for vaporizing compatible cannabis oils with minimal maintenance concerns.
  
  Product Highlights:
  • Integrated all-in-one design (no separate tank/battery)
  • Leak-resistant top-fill system
  • 1500mAh battery capacity
  • Adjustable airflow for customized draws
  • Available in multiple color options
  
  Technical Specifications:
  The Void features a 1500mAh internal battery integrated with a 2ml capacity tank in a unified design that eliminates connection issues. The top-fill system is engineered to minimize leakage problems common in other devices. Adjustable airflow allows users to customize the draw resistance and vapor production to their preference.
  
  Usage Guidance:
  This device works best with thinner cannabis oils. To fill, twist open the top cap and carefully add oil around the edges (not in the center airflow tube). Five clicks of the button powers the device on/off, and the button is held while inhaling. The airflow can be adjusted by rotating the control ring near the mouthpiece.
  
  What's Included:
  • XEO Void all-in-one device
  • Two coils (typically 0.6Ω and 1.0Ω)
  • USB charging cable
  • User manual
  • Warranty information
      `,
    },
    {
      id: 707,
      name: "AirVape OM Mini Vaporizer",
      slug: "airvape-om-mini-vaporizer",
      category: "vapes",
      img: "https://res.cloudinary.com/dajo3lcto/image/upload/v1744833717/av-om-full_ykl7kj.webp",
      price: 35,
      quantity: 1,
      details: {
        1: 'Compact cartridge battery',
        2: 'Magnetic adapter system',
        3: 'Variable voltage settings',
        4: 'Brand: AirVape'
      },
      des: `
  About AirVape OM Mini Vaporizer
  
  The AirVape OM Mini is a compact, feature-rich battery designed specifically for use with pre-filled cannabis oil cartridges. This pocket-sized device combines functionality with discreet design for on-the-go consumption.
  
  Product Highlights:
  • Ultra-compact size for maximum discretion
  • Magnetic adapter system for quick cartridge changes
  • Variable voltage settings (2.4V, 3.2V, 4.0V)
  • Compatible with standard 510-thread cartridges
  • Premium materials and construction
  
  Technical Specifications:
  Despite its small size, the OM Mini packs multiple voltage settings to customize the vaporization experience based on oil thickness and flavor preference. The magnetic connection system eliminates threading issues and makes changing cartridges quick and convenient. The device automatically activates when inhalation is detected for buttonless operation.
  
  Usage Guidance:
  This device is designed specifically for pre-filled oil cartridges with 510 threading. Attach the magnetic adapter to your cartridge, then connect it to the battery. Triple-click the button to cycle through voltage settings (typically indicated by different LED colors). The device activates automatically when you inhale, with no need to hold a button during use.
  
  What's Included:
  • AirVape OM Mini battery
  • Magnetic adapter
  • USB charging cable
  • User manual
  • Warranty card
      `,
    },
  ];
  


export default products;