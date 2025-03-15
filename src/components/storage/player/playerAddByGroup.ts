import AsyncStorage from '@react-native-async-storage/async-storage';
import { playersGetByGroup } from './playersGetByGroup';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '../storageConfig';
import { AppError } from '@components/utils/AppError';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await playersGetByGroup(group);
    const playerAlreadyExists = storedPlayers.some(
      (player) => player.name === newPlayer.name,
    );
    if (playerAlreadyExists) {
      throw new AppError('Essa pessoa já está adicionada em um time.');
    }
    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}