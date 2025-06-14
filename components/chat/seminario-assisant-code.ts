export const assistantData = {
  "ayudante de cocina": {
    author: "Corrado De Luca",
    python_code_snippet: `from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input="Write a one-sentence bedtime story about a unicorn."
)

print(response.output_text) `
  }
} as const
