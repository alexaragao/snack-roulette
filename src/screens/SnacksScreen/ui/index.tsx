import React, { FC } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button } from '~/components/Button';
import { Text } from '~/components/Text';
import { Snack } from '~/domain/entities/Snack';
import { layout } from '~/theme/layout';
import { SnackListItem } from './components/SnackListItem';
import { styles } from './styles';

export type SnacksUIProps = {
  maxSnacks: number;
  snacks?: Snack[];
  selectedSnacks: Set<Snack>;
  canGoToRoulette: boolean;
  onSelectItem: (item: Snack) => void;
  onProceedPress: () => void;
};

export const SnacksUI: FC<SnacksUIProps> = ({
  snacks,
  maxSnacks,
  selectedSnacks,
  canGoToRoulette,
  onSelectItem,
  onProceedPress,
}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text size="title" style={styles.pageTitle}>
          Escolha seus lanchinhos 😋
        </Text>
      </View>
      <FlatList
        data={snacks}
        numColumns={layout.column / 2}
        style={styles.flatList}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.item} key={item.id}>
            <SnackListItem
              snack={item}
              onPress={() => onSelectItem(item)}
              isSelected={selectedSnacks.has(item)}
            />
          </View>
        )}
      />
      <View style={styles.footer}>
        <Button
          title="Continuar"
          disabled={!canGoToRoulette}
          onPress={onProceedPress}
        />
        <Text style={styles.snacksDescription}>
          {selectedSnacks.size} de {maxSnacks} lanches selecionados
        </Text>
      </View>
    </SafeAreaView>
  );
};
