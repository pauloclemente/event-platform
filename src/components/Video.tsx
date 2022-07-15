import { gql, useQuery } from "@apollo/client";
import Link from "next/link"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"
import StorageKey from "../enums/StorageKey";

interface VideoProps {
  lessonSlug: string | string[];
}
interface IGetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    track: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}
export function Video(props: VideoProps) {

  const { data } = useQuery<IGetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    }
  })

  if (data?.lesson.track) {
    localStorage.setItem(StorageKey.WatchingTrack, data?.lesson.track)
  }

  localStorage.setItem(StorageKey.WatchingClass, props.lessonSlug.toString())

  if (!data) {
    return <div className="flex-1">Loading</div>
  }

  const mediaSrc = `https://www.youtube.com/embed/${data.lesson.videoId}?autohide=2&showinfo=0&rel=0&modestbranding=1&color=white&autoplay=0`;
  return (
    <div className="flex-1">
      <div className=" flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <iframe
            src={mediaSrc}
            data-cookieconsent="marketing"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full flex justify-center items-center"
          />
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">

            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-400">
              {data.lesson.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt="Imagem de perfil" />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="" >
              <a className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                <DiscordLogo size={24} />
                comunidade do discord
              </a>
            </Link>
            <Link href="" >
              <a className="p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24} />
                acesse o desafio
              </a>
            </Link>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <Link href="">
            <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Material Complementar</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o material complementar para acelerar seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
          </Link>
          <Link href="">
            <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Wallpapers exclusivos</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    track
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}`