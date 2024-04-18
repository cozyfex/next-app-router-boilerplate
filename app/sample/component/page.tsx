import CustomButton, { variants } from '@components/CustomButton'

const SampleComponentPage = () => {
  return (
    <main>
      <div className="flex flex-row">
        {Object.keys(variants.variant).map((variant) => (
          <div key={Math.random()} className="flex flex-col">
            {Object.keys(variants.size).map((size) => (
              <div key={Math.random()} className="m-2">
                <CustomButton
                  variant={variant as keyof typeof variants.variant}
                  size={size as keyof typeof variants.size}
                >
                  {variant} {size}
                </CustomButton>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

export default SampleComponentPage
