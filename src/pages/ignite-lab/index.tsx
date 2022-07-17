import { useRouter } from "next/router";
import EventTracks from "../../enums/EventTracks";
import StorageKey from "../../enums/StorageKey";

export default function IgniteLab() {
  const router = useRouter();

  if (typeof window !== 'undefined') {

    const localWatchingClass = localStorage.getItem(StorageKey.WatchingClass);
    const localWatchingTrack = localStorage.getItem(StorageKey.WatchingTrack);

    if (!localWatchingClass || localWatchingTrack as EventTracks) {
      router.push(`/ignite-lab/react/abertura-do-evento-ignite-lab`)
    } else {
      router.push(`/ignite-lab/${localWatchingTrack}/${localWatchingClass}`)
    }
  }

  return <></>
}