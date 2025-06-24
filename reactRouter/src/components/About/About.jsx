import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600https://www.google.com/imgres?q=meeting%20photos&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fmixed-group-around-table-business-meeting-21283913.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbusiness-meeting.html&docid=hYlXrRklPEX2RM&tbnid=YGsJhDdogvXdcM&vet=12ahUKEwjc_uSUg_WNAxVqoWMGHbh_AesQM3oECBkQAA..i&w=800&h=534&hcb=2&ved=2ahUKEwjc_uSUg_WNAxVqoWMGHbh_AesQM3oECBkQAA"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}