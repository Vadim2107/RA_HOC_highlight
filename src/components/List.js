import AddHighlight from './AddHighlight';
import Video from './Video';
import Article from './Article';

export default function List(props) {
    const VideoContainer = AddHighlight(Video);
    const ArticleContainer = AddHighlight(Article);

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    // <Video {...item} />
                    <VideoContainer {...item} />
                );

            case 'article':
                return (
                    // <Article {...item} />
                    <ArticleContainer {...item} />
                );
        }
    });
};
