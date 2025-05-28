'use client';

import { useState } from 'react';
import ProductModal from './ProductModal';

type ProductGroup = {
    name: string;
    detail: string;
    date: string;
    image: string[];
    title: string;
    skill: string[];
};

const productGroups: ProductGroup[] = [
    {
        name: 'product1',
        detail: `物体検出を高速かつ高精度に実現するディープラーニングベースのアルゴリズムであるYOLO（You Only Look Once）を自分でアノテーションしたデータで転移学習をしました。labelImgというツールを使用してアノテーションをし、その後そのデータを使ってすでにある重みからGoogle-Colabを使用して、追加学習をしました。アノテーションの際画像の前処理が大事になってきたためOpenCVを用いて解像度の調節や、マスク処理などをしました。また、検証用のために複数枚の画像を検証するコードを自作しました。（検証結果の画像は著作権の問題でここには載せていません。）この学習した重みは今、Archaiveという図面管理システムである図面内の部品を検知するために使用されています。
        `,
        date: '2024/08',
        title: 'YOLOを使った図面検知AI',
        image: [
            '/product/archaive/similar.png'
        ],
        skill: ['Python', 'Google-Colab', 'OpenCV', 'PyTorch', 'Google Cloud Vision', 'Git/GitHub'],
    },
    {
        name: 'product2',
        detail: `StarUpで図面管理システムArchaiveの実装に携わりました。Arichaiveは図面を管理するデータベースでそれに加えて、AIによる類似図面検索が可能です。主に私はバックエンド側として携わり、データベースへのCRUD操作、エンドポイントの作成、新機能の開発へのPM、フルスタックとして携わりました。`,
        date: '2024/09',
        title: 'Archaive',
        image: [
            '/product/archaive/file_database.png',
            '/product/archaive/upload.png',
            '/product/archaive/project_database.png',
            '/product/archaive/project.png',
            '/product/archaive/drawing.png',
        ],
        skill: ['Python', 'FastAPI', 'MySQL', 'Redis', 'PostgreSQL',
            'SQLAlchemy', 'AWS', 'Qdrant', 'React', 'TypeScript', 'Next.js',
            'HTML', 'CSS3', 'Tailwind CSS', 'Docker/Docker Compose', 'Git/GitHub'],
    },
    {
        name: 'product3',
        detail: `研究の一環で変分オートエンコーダ（VAE）を作成しました。VAEとはニューラルネットワークを用いた教師無し学習の手法の一つです。データセットはMNISTを使いました。`,
        date: '2024/06',
        title: '変分オートエンコーダ',
        image: [
            '/product/vae/num7.png',
            '/product/vae/epic.png',
            '/product/vae/graph.png',
        ],
        skill: ['Python', 'PyTorch', 'NumPy', 'Matplotlib'],
    },
    {
        name: 'product4',
        detail: `このサイトです。ある程度技術力がついてきたと思ったので、少しでも自分のことを知ってもらえたらと思って作成しました。全てデザインからコーディングまで全て自分で作成しました。`,
        date: '2025/05',
        title: 'ポートフォリオ',
        image: [
            '/product/portfolio/hero.png',
            '/product/portfolio/contact.png',
        ],
        skill: ['TypeScript', 'HTML', 'CSS3', 'Tailwind CSS', 'React', 'Next.js', 'Slack', 'Docker/Docker Compose', 'Git/GitHub'],
    },
    {
        name: 'product5',
        detail: `このポートフォリオで使用している技術です。Contactフォームからお問い合わせいただくと、私のスラックに転送されるようになっています。`,
        date: '2025/05',
        title: 'スラックへの通知',
        image: [
            '/product/slack/contact.png',
            '/product/slack/slack.png',
            '/product/slack/slack_detail.png',
        ],
        skill: ['TypeScript', 'Slack'],
    },
    {
        name: 'product6',
        detail: `モバイルアプリ向けの手書き漢字認識モデルの開発に携わりました。スマホ向けの軽量なディープラーニングモデルであるEfficientNetを利用して、漢字のストロークデータを解析して、画像のみから認識精度を向上させるために追加学習をしました。`,
        date: '2024/10',
        title: '手書き漢字認識のモデル開発',
        image: [
            '/product/kanji/kanji.png'
        ],
        skill: ['Python', 'Google-Colab', 'TensorFlow', 'Keras', 'OpenCV', 'scikit-learn', 'Numpy', 'Pandas', 'Matplotlib', 'MobileNet'],
    },
];

export default function Products() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setSelectedProductIndex(index);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedProductIndex(null);
    };

    return (
        <section id="products" className="colored-section">
            <div className="inner text-center">
                <div className="max-w-5xl mx-auto px-4">
                    {/* タイトル */}
                    <div className="section-title-area">
                        <div className="section-title">PRODUCTS</div>
                        <div className="section-intro">
                            自分が携わったプロダクト、制作物です。今後も更新していきます。
                        </div>
                    </div>

                    {/* グリッド配置のプロダクトカード */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 md:px-4">
                        {productGroups.map((product, i) => (
                            <div
                                key={i}
                                className="w-full h-80 bg-whitegray rounded shadow-md cursor-pointer
                                        hover:opacity-90 relative overflow-hidden
                                        transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                                onClick={() => handleCardClick(i)}
                            >
                                <img
                                    src={product.image[0]}
                                    alt={product.name}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="px-4 py-2 text-left">
                                    <h3 className="text-lg font-semibold text-darkblue">{product.title}</h3>
                                    <p className="text-sm text-darkgray">{product.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* モーダルに個別の productGroup を渡す */}
            <ProductModal
                isOpen={modalOpen}
                onClose={handleClose}
                productGroup={selectedProductIndex !== null ? productGroups[selectedProductIndex] : null}
            />
        </section>
    );
}