import { useRouter } from "next/router";
import StorageKey from "../../../enums/StorageKey";

export default function Track() {
  const router = useRouter();
  const { track } = router.query

  if (typeof window !== 'undefined') {
    const localWatchingClass = localStorage.getItem(StorageKey.WatchingClass);
    const localWatchingTrack = localStorage.getItem(StorageKey.WatchingTrack);

    if (!localWatchingClass || localWatchingTrack !== 'react') {
      router.push(`/ignite-lab/react/abertura-do-evento-ignite-lab`)
    } else {
      router.push(`/ignite-lab/${localWatchingTrack}/${localWatchingClass}`)
    }
  }

  return <></>
}