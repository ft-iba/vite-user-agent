const createJpegFile4Base64 = (base64: string, name: string): File => {
    // base64のデコード
    const bin = atob(base64.replace(/^.*,/, ''));
    // バイナリデータ化
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    // ファイルオブジェクト生成(この例ではjpegファイル)
    return new File([buffer.buffer], name, {type: "image/jpeg"});
};

export const shareTests = [
  {
    id: 'text',
    label: 'テキスト',
    async getData() {
      return {
        text: 'Web Share API test!'
      };
    },
  },
  {
    id: 'url',
    label: 'URL',
    async getData() {
      return {
        url: location.href
      };
    },
  },
  {
    id: 'image',
    label: '画像・テキスト',
    async getData() {
      const dpr = 2;
      try {
        // カメラ映像を取得
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { exact: 'environment' }
          }
        });

        const video = document.createElement('video');
        video.srcObject = stream;
        await video.play(); // await video.onloadedmetadata を代替可能

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth * dpr;
        canvas.height = video.videoHeight * dpr;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const base64 = canvas.toDataURL('image/jpeg', 1.0);
        const jpegData = await createJpegFile4Base64(base64, 'share-image.jpg');
        // 動作テストなのでカメラを停止
        stream.getTracks().forEach((track) => track.stop());
        return {
          files: [jpegData],
          text: '#カメラ画像のシェア'
        };
      } catch (err) {
        throw new Error(`カメラ取得/変換でエラー: ${(err as Error).message}`);
      }
      },
    },
];
