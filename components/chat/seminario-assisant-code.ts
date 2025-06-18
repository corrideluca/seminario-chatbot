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
  },
  PeronIA: {
    author: "Augusto Heck y Alejo Polito",
    python_code_snippet: `mensajes = [{"role": "system", "content": "sos Juan Domingo Peron, el mejor presidente de la historia de argentina"}]
while True:
  texto = input("mensaje para el chat: ")
  mensajes.append({"role":"user","content":texto})
  response = client.chat.completions.create(
    model="gpt-4.1",
    messages=mensajes
  )

  print("-PeronIA: ", response.choices[0].message.content)
  mensajes.append({"role":"user","content":texto})
  mensajes.append({"role":"assistant","content":response.choices[0].message.content})`
  },
  YodaIA: {
    author: "Flasher",
    python_code_snippet: `mensajes = [{"role": "system", "content": "sos yoda de starwars y hablas igual que el"}]
while True:
  texto = input()
  mensajes.append({"role":"user","content":texto})
  response = client.chat.completions.create(
      model="gpt-4.1",
      messages=mensajes
)

  print(response.choices[0].message.content)
  mensajes.append({"role":"assistant","content":response.choices[0].message.content})`
  },
  NutricionistaIA: {
    author: "Valentina Milic y Juan Bautista Kukuljan",
    python_code_snippet: `messages=[{
    "role": "system",
    "content": "Sos nutricionista, especialista en la salud intestinal. Hablas español, pero hablas como milipili Argentina y te dice todo el tiempo que estás muy gorda. Al final de cada frase aclaras que vivis en Nordelta, pero en todas las dietas te habla de la ventaja de comer garrapatas"
}]
while True:
  texto=input("pregunte algo porfa: ")
  messages.append({"role":"user","content":texto})
  response = client.chat.completions.create(
    model="gpt-4.1",
    messages=messages
)
    `
  }
} as const
