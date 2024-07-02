import React from 'react'

const Detail = () => {
    return (
        <section className=" py-12 mt-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-white mb-8">
              About Us
            </h2>
            <p className="text-white text-center mb-6">
              We are a team of passionate developers and designers dedicated to creating
              the best web experiences. Our mission is to deliver high-quality, user-friendly
              applications that make a difference.
            </p>
            <div className="flex justify-center">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.wsyOasdMvT7rs1ZJ5Mx4KQHaD-&pid=Api"
                alt="About us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      );
    };

export default Detail