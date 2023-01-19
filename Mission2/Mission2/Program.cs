using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mission2
{
    class Program
    {
		static void Main(string[] args)
		{

			Console.WriteLine("Welcome to the dice throwing simulator! \n");
			Random r = new Random();
			Console.Write("How many dice rolls would you like to simulate? \n");
			string input = Console.ReadLine();

			Console.WriteLine("DICE ROLLING SIMULATION RESULTS");
			Console.WriteLine("Each \" * \" represents 1% of the total number of rolls.");
			


			int numRolls = int.Parse(input);
			
			int[] rollTotals = new int[12];

			Console.WriteLine("Total number of rolls = " + numRolls + ".\n");

			for (int i =0; i < numRolls; i++)
            {
				int roll = r.Next(1, 7) + r.Next(1, 7);
				rollTotals[roll - 1]++;
            }
			for (int i = 1; i < rollTotals.Length; ++i)
            {
				
				string output = (i + 1) +": ";
				double percent = (rollTotals[i] / (double)numRolls) * 100;
				
				for (int j = 0; j < percent; j++)
                {
					output += "*";
                }
				

				Console.WriteLine(output);
            }
			Console.WriteLine("\nThank you for using the dice throwing simulator.  Goodbye!");

			string test = Console.ReadLine();

		}
    }
}
