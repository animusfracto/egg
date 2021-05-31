import { ei, Mission } from 'lib';

export function missionDurationTypeFgClass(mission: Mission): string {
  switch (mission.durationType) {
    case ei.MissionInfo.DurationType.TUTORIAL:
    case ei.MissionInfo.DurationType.SHORT:
      return 'text-blue-500';
    case ei.MissionInfo.DurationType.LONG:
      return 'text-purple-500';
    case ei.MissionInfo.DurationType.EPIC:
      return 'text-yellow-500';
    default:
      return '';
  }
}

export function missionDurationTypeBgClass(mission: Mission): string {
  switch (mission.durationType) {
    case ei.MissionInfo.DurationType.TUTORIAL:
    case ei.MissionInfo.DurationType.SHORT:
      return 'bg-blue-500';
    case ei.MissionInfo.DurationType.LONG:
      return 'bg-purple-500';
    case ei.MissionInfo.DurationType.EPIC:
      return 'bg-yellow-500';
    default:
      return '';
  }
}

export function artifactRarityFgClass(afxRarity: ei.ArtifactSpec.Rarity): string {
  switch (afxRarity) {
    case ei.ArtifactSpec.Rarity.COMMON:
      return '';
    case ei.ArtifactSpec.Rarity.RARE:
      return 'text-blue-500';
    case ei.ArtifactSpec.Rarity.EPIC:
      return 'text-purple-500';
    case ei.ArtifactSpec.Rarity.LEGENDARY:
      return 'text-yellow-500';
  }
}
