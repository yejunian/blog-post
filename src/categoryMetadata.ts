type CategoryMetadata = Map<string, CategoryMetadataEntry>

type CategoryMetadataEntry = {
  label: string
  description: string
}

const categoryMetadata: CategoryMetadata = new Map<
  string,
  CategoryMetadataEntry
>([
  [
    'post',
    {
      label: '메인 포스트',
      description:
        '주로 컴퓨터공학, 프로그래밍 기술 등과 관련된 내용을 다룬다.',
    },
  ],
])

export default categoryMetadata
