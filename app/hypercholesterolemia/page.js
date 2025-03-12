import RoutingHeader from "./routeHeader";
export default function Hypercholesterolemia()
{

  const headingSyles = "text-[1.5rem] mt-4 font-medium pb-2";

  return (
    <>
      <RoutingHeader />

      <section className="h-auto w-full bg-[#30493D] flex flex-row items-center justify-center pt-[10rem] pb-[1rem]">
        <div className="p-4 bg-[#CED1BF] text-[#30493D] w-[95%] rounded-2xl flex flex-col items-center">
          <h1 className="w-full p-2 border-b-2 border-b-amber-500 text-[1.75rem] md:text-[3.5rem]">Hypercholesterolemia & Your Health</h1>
          <div className="p-8">
            <h2 className="text-[2rem] pb-2 font-semibold">Understanding Hypercholesterolemia</h2>
            <p>&nbsp;&nbsp;Hypercholesterolemia, commonly referred to as high cholesterol, is a condition in which excess cholesterol circulates in the bloodstream, increasing the risk of heart disease and stroke. Cholesterol is a fatty substance essential for cell function, but an imbalance—especially high levels of LDL (low-density lipoprotein) cholesterol—can lead to plaque buildup in the arteries, restricting blood flow.</p>

            <h1 className="text-[1.5rem] w-full font-medium pt-8">Types of Hypercholesterolemia:</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="shadow-lg p-4 rounded-2xl">
                <h2 className="text-[1.25rem] pb-2 font-medium">Primary (Genetic) Hypercholesterolemia</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Caused by inherited genetic mutations</li>
                  <li>Familial Hypercholesterolemia (FH) is the most severe form</li>
                </ul>
              </div>
              <div className=" shadow-lg p-4 rounded-2xl">
                <h2 className="text-[1.25rem] pb-2 font-medium">Secondary (Lifestyle-Related) Hypercholesterolemia</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Caused by diet, obesity, and lack of exercise</li>
                  <li>Often linked to medical conditions like diabetes and hypothyroidism</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full border-t-2 border-t-amber-500 p-8">
            <h2 className="text-[2rem] pb-2 font-semibold">Risk Factors</h2>
            <p>&nbsp;&nbsp;Several factors contribute to hypercholesterolemia, some of which are controllable while others are genetic:</p>
            
            <div className="pl-2">
              <h3 className="text-[1.5rem] mt-4 font-medium pb-2">Genetic Factors:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Family history of high cholesterol or cardiovascular diseases.</li>
                <li>Inherited conditions like Familial Hypercholesterolemia (FH).</li>
              </ul>
            </div>
            <div className="pl-2">
              <h3 className="text-[1.5rem] mt-4 font-medium pb-2">Lifestyle Factors:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-medium">Unhealthy Diet:</span> High intake of saturated fats, trans fats, and processed foods.</li>
                <li><span className="font-medium">Lack of Physical Activity:</span> Sedentary lifestyle leading to poor cholesterol metabolism.</li>
                <li><span className="font-medium">Obesity:</span>Obesity: Increases LDL while decreasing protective HDL (high-density lipoprotein) cholesterol.</li>
                <li><span className="font-medium">Obesity:</span> Excess body weight contributes to higher cholesterol levels.</li>
              </ul>
            </div>
            <div className="pl-2">
              <h3 className="text-[1.5rem] mt-4 font-medium pb-2">Medical Conditions:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-medium">Diabetes:</span> Alters lipid metabolism and increases cholesterol.</li>
                <li><span className="font-medium">Hypertension (High Blood Pressure):</span> Damages arteries, increasing cholesterol’s harmful effects.</li>
                <li><span className="font-medium">Liver & Kidney Diseases:</span> Affect cholesterol processing in the body.</li>
              </ul>
            </div>
          </div>

          <div className="w-full border-t-2 border-t-amber-500 p-8">
            <h2 className="text-[2rem] pb-2 font-semibold">Symptoms & Complications</h2>
            <p>&nbsp;&nbsp;Hypercholesterolemia is often called a "silent" condition because it typically does not cause noticeable symptoms until complications arise.</p>
            
            <div className="pl-2">
              <h3 className="text-[1.5rem] font-medium mt-4 pb-2">Potential Complications:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-medium">Atherosclerosis:</span> Cholesterol buildup in arteries leading to narrowing and hardening.</li>
                <li><span className="font-medium">Heart Disease:</span> Increased risk of heart attacks due to restricted blood flow.</li>
                <li><span className="font-medium">Stroke:</span> Reduced blood supply to the brain due to blocked arteries.</li>
                <li><span className="font-medium">Atherosclerosis:</span> Inherited conditions like Familial Hypercholesterolemia (FH).</li>
              </ul>
            </div>
          </div>

          <div className="w-full border-t-2 border-t-amber-500 p-8">
            <h2 className="text-[2rem] pb-2 font-semibold">Preventive Measures</h2>
            <p>&nbsp;&nbsp;Managing cholesterol levels early is key to preventing long-term health issues.</p>
            
            <div className="pl-2">
              <h3 className="text-[1.5rem] font-medium mt-4 pb-2">Dietary Changes:</h3>
              <ul className="list-none space-y-2 pl-4">
                <li>✅ Increase fiber intake (whole grains, fruits, vegetables).</li>
                <li>✅ Eat healthy fats (avocados, nuts, olive oil).</li>
                <li>✅ Consume omega-3-rich foods (salmon, flaxseeds).</li>
                <li>❌ Reduce saturated fats (red meat, full-fat dairy).</li>
                <li>❌ Avoid trans fats (fried foods, packaged snacks).</li>
              </ul>
            </div>

            <div className="pl-2">
              <h3 className="text-[1.5rem] font-medium mt-4 pb-2">Exercise & Lifestyle:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>150 minutes of moderate exercise per week (brisk walking, cycling, swimming).</li>
                <li>Strength training twice a week for cardiovascular benefits.</li>
                <li>Quit smoking & limit alcohol consumption.</li>
              </ul>
            </div>

            <div className="pl-2">
              <h3 className="text-[1.5rem] font-medium mt-4 pb-2">Medical Management:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Regular cholesterol screenings (especially if at risk).</li>
                <li>Medications like statins may be prescribed for severe cases.</li>
              </ul>
            </div>
          </div>

          <div className="w-full border-t-2 border-t-amber-500 p-8">
            <h2 className="text-[2rem] pb-2 font-semibold">Role of AI in Hypercholesterolemia Prediction</h2>
            <p>&nbsp;&nbsp;Artificial intelligence (AI) is revolutionizing healthcare by enabling early detection and personalized health insights.</p>
            
            <div className="pl-2">
              <h3 className="text-[1.5rem] font-medium mt-4 pb-2">How AI Enhances Cholesterol Risk Prediction:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Analyzes vast amounts of health data (genetic factors, lifestyle, medical history).</li>
                <li>Predicts long-term cholesterol risks based on patterns in patient data.</li>
                <li>Provides proactive health recommendations tailored to an individual’s risk profile.</li>
              </ul>
            </div>

            <div className="pl-2">
              <h3 className="text-[1.5rem] font-medium mt-4 pb-2">Benefits of AI in Preventive Healthcare:</h3>
              <ul className="list-none space-y-2 pl-4">
                <li>🔬 Early Detection: AI identifies at-risk individuals before symptoms appear.</li>
                <li>📊 Personalized Insights: Custom health plans based on unique patient data.</li>
                <li>💡 Data-Driven Prevention: Encourages proactive lifestyle modifications.</li>
              </ul>
              <p className="p-4">&nbsp;&nbsp;At <span className="text-[#CA7D57] font-medium">AsclepiusAI</span>, we are committed to harnessing the power of AI to revolutionize predictive healthcare, ensuring that individuals have access to the insights they need to take charge of their health.</p>
            </div>
          </div>
          <div className="w-full border-t-2 border-t-amber-500 p-8">
            <h2 className="text-[2rem] pb-2 font-semibold text-center"><span className="block md:inline-block">🔬</span> Precision. <span className="text-[#CA7D57] font-medium">Prevention. </span><span className="block md:inline-block">Progress.</span>  <span className="text-[#CA7D57] font-medium">Welcome to the Future of AI-Driven Healthcare.</span></h2>
          </div>
        </div>
      </section>
    </>
    
  )
}