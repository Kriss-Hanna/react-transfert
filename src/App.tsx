import { Suspense, lazy } from 'react'
import Navbar from "./components/Navbar"
import { AuthProvider } from "./context/AuthContext"
import { Container, Col } from "react-bootstrap"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

const Home = lazy(() => import("./components/Home"))
const File = lazy(() => import("./components/File"))
const RequestFile = lazy(() => import("./components/RequestFile"))
const FileSent = lazy(() => import("./components/FileSent"))

function App() {
  return (
    <AuthProvider>

       <BrowserRouter>
        <Navbar />
        <Container className="mt-5">
          <Col xl={{span: 6, offset: 3}}>

            <Routes>
              <Route path="/" element={<Suspense><Home/></Suspense>} />
              <Route path="/files" element={<Suspense><RequestFile /></Suspense>} />
              <Route path="/files/:id" element={<Suspense><File /></Suspense>} />
              <Route path="/sent" element={<Suspense><FileSent /></Suspense>} />
            </Routes>

          </Col>
        </Container>
      </BrowserRouter>

    </AuthProvider>
   
  )
}

export default App
