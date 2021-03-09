import DOMPurify from 'dompurify';

function App() {
  const introduction = '<span style="font-weight: bold">Hello</span><img src="" onerror="console.log(document.cookie)">';
  const cleanIntroduction = DOMPurify.sanitize(introduction);
  return (
    <main dangerouslySetInnerHTML={{ __html: cleanIntroduction}}>
    </main>
  );
}

export default App;