
export default function Hypercholesterolemia()
{
  return (
    <section className="h-auto w-full bg-[#30493D] flex flex-row items-center justify-center py-[8rem]">
      <div className="p-4 bg-[#CED1BF] text-[#30493D] w-[95%] rounded-2xl flex flex-col items-center">
        <h1 className="w-full p-2 border-b-2 border-b-amber-500 text-[1.75rem] md:text-[3.5rem]">Hypercholesterolemia & Your Health</h1>
        <div className="p-8">
          <h2 className="text-[2rem] pb-2">Understanding Hypercholesterolemia</h2>
          <p>&nbsp;&nbsp;Hypercholesterolemia, commonly referred to as high cholesterol, is a condition in which excess cholesterol circulates in the bloodstream, increasing the risk of heart disease and stroke. Cholesterol is a fatty substance essential for cell function, but an imbalance—especially high levels of LDL (low-density lipoprotein) cholesterol—can lead to plaque buildup in the arteries, restricting blood flow.</p>

          <h1 className="text-[1.5rem] w-full pt-8">Types of Hypercholesterolemia</h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="shadow-lg p-4 rounded-2xl">
              <h2 className="text-[1.25rem] mb-2">Primary (Genetic) Hypercholesterolemia</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Caused by inherited genetic mutations</li>
                <li>Familial Hypercholesterolemia (FH) is the most severe form</li>
              </ul>
            </div>
            <div className=" shadow-lg p-4 rounded-2xl">
              <h2 className="text-[1.25rem] mb-2">Secondary (Lifestyle-Related) Hypercholesterolemia</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Caused by diet, obesity, and lack of exercise</li>
                <li>Often linked to medical conditions like diabetes and hypothyroidism</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full border-t-2 border-t-amber-500 p-8">
          <h2 className="text-[2rem] pb-2">Risk Factors</h2>
          <p>&nbsp;&nbsp;Several factors contribute to hypercholesterolemia, some of which are controllable while others are genetic:</p>
          
          <div className="pl-2">
            <h3 className="font-semibold mt-4">Genetic Factors:</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Family history of high cholesterol or cardiovascular diseases.</li>
              <li>Inherited conditions like Familial Hypercholesterolemia (FH).</li>
            </ul>
          </div>
          <div className="pl-2">
            <h3 className="font-semibold mt-4">Lifestyle Factors:</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Unhealthy Diet: High intake of saturated fats, trans fats, and processed foods.</li>
              <li>Lack of Physical Activity: Sedentary lifestyle leading to poor cholesterol metabolism.</li>
              <li>Smoking & Alcohol Consumption: Increases LDL while decreasing protective HDL (high-density lipoprotein) cholesterol.</li>
              <li>Obesity: Excess body weight contributes to higher cholesterol levels.</li>
            </ul>
          </div>
          <div className="pl-2">
            <h3 className="font-semibold mt-4">Medical Conditions:</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Diabetes: Alters lipid metabolism and increases cholesterol.</li>
              <li>Hypertension (High Blood Pressure): Damages arteries, increasing cholesterol’s harmful effects.</li>
              <li>Liver & Kidney Diseases: Affect cholesterol processing in the body.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}