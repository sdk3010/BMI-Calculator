BMI Calculator

  🎯 Objective:
        BMI (Body Mass Index) Calculator that takes user input for height and weight, calculates their BMI, and displays a health category (e.g., Underweight, Normal, Overweight, Obese). This project reinforces form handling, DOM manipulation, and basic logic in JavaScript.

📷 Output:


![image](https://github.com/user-attachments/assets/c5641e5d-ccd7-49ef-944b-474570cfa0a4)
      
![image](https://github.com/user-attachments/assets/d5e181e8-8ae1-460e-9555-599f0b1bcf30)

![image](https://github.com/user-attachments/assets/7e153eee-2ca3-4d13-8552-825ab76523a9)


      ✅ Requirements:
            🔹 Features to Implement:
                  1. Input Fields:
                        Height input (in cm or m)
                        
                        
                        Weight input (in kg)
                        
                        
                        Ensure validation for numeric and non-empty values
                        
                  
                  2. Calculate BMI Button:
                        A button labeled "Calculate BMI"
                        
                        
                        On click, compute the BMI using the formula:
                         BMI=weight (kg)(height (m))2\text{BMI} = \frac{\text{weight (kg)}}{\left(\text{height (m)}\right)^2}BMI=(height (m))2weight (kg)​
                  3. Display Result:
                        Show the calculated BMI value (rounded to 1 decimal)
                        
                        
                        Show the BMI category, such as:
                        
                        
                        Underweight: BMI < 18.5
                        
                        
                        Normal weight: 18.5 ≤ BMI < 24.9
                        
                        
                        Overweight: 25 ≤ BMI < 29.9
                        
                        
                        Obese: BMI ≥ 30
                  
                  
                  4. Reset Button:
                        A button to clear all input fields and results
      


      🌟 Bonus Features (Advanced):
      🌈 Color-coded Result: Change the result background color based on category



      💻 Tech Stack:
            HTML: Input structure, form
            
            
            CSS: Styling the form, result box, and responsiveness
            
            
            JavaScript: Input handling, calculation logic, result rendering



      ✅ Design & UX Guidelines:
            Use form validation for numeric input
            
            
            Display immediate feedback after calculation
            
            
            Keep layout clean and centered
            
            
            Use large readable font for results
            
            
            Consider using flex/grid for responsive design



      🛠 Development Guidelines:
            Use parseFloat() to extract numeric values from inputs
            
            
            Use addEventListener() for button events
            
            
            DOM updates using .innerText or .textContent
      
            Apply conditional logic for BMI category display
      
      
            Style elements using CSS classes dynamically if needed
