import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sandy Point Marina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Sandy Point Marina!" />
        <div class="pdf-container"></div>
          <object data="/spm-business-proposal.pdf" type="application/pdf" width="80%" height="80%">
      <p>Unable to display PDF file. <a href="/spm-business-proposal.pdf">Download</a> instead.</p>
    </object>
      </main>

      <Footer />
    </div>
  )
}
