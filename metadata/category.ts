type CategoryMetadata = Map<string, CategoryMetadataEntry>;

type CategoryMetadataEntry = {
  label: string;
  description: string;
};

const categoryMetadata: CategoryMetadata = new Map<
  string,
  CategoryMetadataEntry
>([
  [
    'post',
    {
      label: '메인 포스트',
      description: '컴퓨터공학, 프로그래밍 기술',
    },
  ],
  [
    'diary',
    {
      label: '일지',
      description: '소감, 후기, TIL',
    },
  ],
]);

export default categoryMetadata;
