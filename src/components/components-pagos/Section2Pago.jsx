function Section2Pago() {
    return (
      <div className="bg-white py-24 mt-[-7rem] sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center animate-jump-in animate-once animate-duration-[500ms] animate-ease-in-out animate-normal animate-fill-forwards tracking-tight text-gray-900 sm:text-4xl">
  Nuestros Métodos de Pago en el Ecommerce
</h2>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/bcp.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="/visa.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/paypal.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/mpago.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/mastercard.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
export default Section2Pago