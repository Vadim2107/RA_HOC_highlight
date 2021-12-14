import { VideoContainer, ArticleContainer } from './AddHighlight';

export default function List(props) {

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoContainer {...item} />
                );
            case 'article':
                return (
                    <ArticleContainer {...item} />
                );
        }
    });
};
