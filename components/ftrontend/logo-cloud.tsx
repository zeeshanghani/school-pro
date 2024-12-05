export default function LogoCloud() {
    const schools = [
        {
            name: "School 1",
            src:"https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
        },
        {
            name: "School 2",
            src:"https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
        },
        {
            name: "School 3",
            src:"https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
        },
        {
            name: "School 4",
            src:"https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
        },
        {
            name: "School 5",
            src:"https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
        },

    ]
    return (
        <div className="bg-white py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {schools.map((item,i)=>{
                        return (
                            <img key={i} 
                            alt={item.name}
                            src={item.src}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}