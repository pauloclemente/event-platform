import { useRouter } from "next/router";
import { Header } from "../../../components/Header";
import { SideBar } from "../../../components/SideBar";
import { Video } from "../../../components/Video";

export default function Classes() {
  const router = useRouter()
  console.log(router.query)
  const { slug } = router.query

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video
          lessonSlug={slug}
        />
          : <div className="flex-1" />
        }
        <SideBar />
      </main>
    </div>
  )
}

