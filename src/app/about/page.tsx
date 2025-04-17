import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#85A965]">About Buds Delivery</h1>
        <p className="text-lg leading-relaxed mb-8">
          At <span className="font-semibold">Buds Delivery</span>, we believe in the power of nature to heal, calm, and elevate. 
          Our mission is simple: provide premium-grade cannabis and narcotics wellness products with the utmost privacy, speed, and integrity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><strong>Discreet Shipping:</strong> Your privacy is our priority. Plain packaging. No labels. No worries.</li>
              <li><strong>Premium Quality:</strong> Every product is lab-tested and hand-picked for excellence.</li>
              <li><strong>Trusted Service:</strong> Thousands of customers. Five-star support. Zero compromise.</li>
              <li><strong>Fast Delivery:</strong> Get your order swiftly, safely, and stealthily across the nation.</li>
              <li><strong>Wide Selection:</strong> From flower to edibles, concentrates to wellness products, we have something for everyone.</li>
              <li><strong>Customer-Centric Approach:</strong> We listen to your feedback and continuously improve to meet your needs.</li>
            </ul>
          </div>

          <div className="relative w-full h-64 sm:h-96">
            <Image
              src="/weed3.jpg" // replace with your brand imagery
              alt="Discreet delivery"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="bg-[#F2F8EA] p-8 rounded-2xl shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="text-base leading-relaxed mb-4">
            We understand how important it is to feel safe, seen, and satisfied when shopping online for sensitive products. That’s why 
            we go above and beyond to protect your data, deliver exceptional products, and provide a seamless shopping experience — every time.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Whether you’re looking for flower, edibles, concentrates, narcortics or wellness alternatives, Buds Delivery is your trusted partner in premium, private cannabis care.
          </p>
          <p className="text-base leading-relaxed">
            Our team is dedicated to ensuring that every product you receive meets the highest standards of quality and safety. We work with trusted growers, manufacturers, and suppliers to bring you the best that the cannabis industry has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-base leading-relaxed mb-4">
              At Buds Delivery, we envision a world where cannabis and narcotics is embraced as a natural solution for wellness and recreation. 
              We aim to break the stigma surrounding cannabis use by providing education, transparency, and access to high-quality products.
            </p>
            <p className="text-base leading-relaxed">
              Our goal is to empower individuals to make informed decisions about their health and well-being, while enjoying the benefits of cannabis in a safe and responsible manner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li><strong>Integrity:</strong> We are committed to honesty and transparency in everything we do.</li>
              <li><strong>Quality:</strong> We never compromise on the quality of our products or services.</li>
              <li><strong>Privacy:</strong> Your trust is our priority, and we take every measure to protect your privacy.</li>
              <li><strong>Innovation:</strong> We stay ahead of industry trends to bring you the latest and best products.</li>
              <li><strong>Community:</strong> We believe in giving back and supporting the communities we serve.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}