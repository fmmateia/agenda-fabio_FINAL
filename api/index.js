export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const response = await fetch('https://hook.eu2.make.com/qdchp53s48ochw9j6rvu1zxyb52ew5ct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    return res.status(200).json({ message: '✅ Evento enviado com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao processar o evento', error: error.toString() });
  }
}
