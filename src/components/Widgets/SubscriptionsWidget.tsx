import React, { useMemo } from 'react';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/js/icons/outlined-calendar-alt-icon';
import useStatus from '../../hooks/useStatus';
import { QueryClient, QueryClientProvider } from 'react-query';
import './SubscriptionsWidget.scss';
import {
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  Stack,
  StackItem,
  Title,
  Alert,
  Gallery
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';

const queryClient = new QueryClient();

const SubscriptionsWidget = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SubsWidget />
    </QueryClientProvider>
  );
};

const EmptyStateSubscriptionsIcon = () => (
  <svg
    width="1em"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>{'Group 3@1x'}</title>
    <g id="Widgets" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="Group-3" transform="translate(0, 0)">
        <rect id="Rectangle" x={0} y={0} width={40} height={40} />
        <g id="Group-2" fill="#B8BBBE" fillRule="nonzero">
          <path
            d="M31.9187262,19.2761374 C31.3927862,19.2761374 30.9325672,18.8897255 30.8551471,18.3529467 C30.1712703,13.5687335 26.3523987,9.74900169 21.5674974,9.06443666 C20.9794493,8.98047895 20.5711877,8.43613018 20.6551454,7.84808211 C20.7408236,7.26003404 21.2801831,6.8491918 21.8732204,6.93573018 C27.5973127,7.754834 32.16561,12.3238195 32.9855741,18.0489441 C33.0695318,18.6369921 32.6612702,19.1813409 32.0732221,19.2652986 C32.0210927,19.2728686 31.9691352,19.2761374 31.9187262,19.2761374 L31.9187262,19.2761374 Z"
            id="Path"
          />
          <path
            d="M21.7187245,39.8442283 C21.1693864,39.8442283 20.7005652,39.4242677 20.6501561,38.8656393 C20.5964782,38.2741503 21.0332992,37.7516512 21.6246161,37.6979733 C30.8737279,36.8645898 37.8496159,29.2216853 37.8496159,19.9214763 C37.8496159,10.6212673 30.8737279,2.9783628 21.6246161,2.14497929 C21.0331272,2.09130141 20.5963062,1.56863024 20.6501561,0.97731333 C20.703834,0.38427597 21.2751938,-0.0367168984 21.8161016,0.00285333447 C32.1824704,0.937054919 40,9.50056944 40,19.9214763 C40,30.3423831 32.1824704,38.9060697 21.8161016,39.8400992 C21.7841014,39.8426799 21.7505527,39.8442283 21.7187245,39.8442283 L21.7187245,39.8442283 Z"
            id="Path"
          />
          <path
            d="M20,33.0396967 C12.7662173,33.0396967 6.88160758,27.1550869 6.88160758,19.9213042 C6.88160758,13.4352269 11.7162298,7.8530714 18.1274678,6.93555813 C18.7038168,6.84987998 19.2598646,7.25814155 19.3438223,7.84791007 C19.42778,8.43595814 19.0195184,8.9803069 18.4314704,9.06426462 C13.0728006,9.83123895 9.03199167,14.4986339 9.03199167,19.9211322 C9.03199167,25.9686681 13.9522921,30.8889685 19.999828,30.8889685 C25.421638,30.8889685 30.089033,26.8483316 30.8551471,21.4894898 C30.9408253,20.9014417 31.4801848,20.4973092 32.0732221,20.5771378 C32.6612702,20.6610956 33.0695318,21.2054443 32.9855741,21.7934924 C32.0682328,28.2049024 26.4852171,33.0393526 19.999828,33.0393526 L20,33.0396967 Z"
            id="Path"
          />
          <path
            d="M18.2804153,39.8442283 C18.248415,39.8442283 18.2157266,39.8425079 18.1830381,39.8400992 C7.81666939,38.9058977 0,30.3423831 0,19.9214763 C0,9.50056944 7.81684144,0.936882875 18.1830381,0.00285333447 C18.7853659,-0.0391255213 19.2970262,0.386684593 19.3507041,0.97731333 C19.4036938,1.56880229 18.967561,2.09130141 18.3762441,2.14497929 C9.12627205,2.9783628 2.15038409,10.6212673 2.15038409,19.9214763 C2.15038409,29.2216853 9.12627205,36.8645898 18.3762441,37.6979733 C18.9677331,37.7516512 19.4036938,38.2743223 19.3507041,38.8656393 C19.3002951,39.4242677 18.8307856,39.8442283 18.2804153,39.8442283 L18.2804153,39.8442283 Z"
            id="Path"
          />
          <path
            d="M18.2795551,24.4374721 C18.0039398,24.4374721 17.7293568,24.332525 17.5192905,24.1224587 L14.0784007,20.6815689 C13.6584401,20.2616082 13.6584401,19.5811723 14.0784007,19.1610396 C14.4983613,18.740907 15.1787972,18.741079 15.5989299,19.1610396 L18.2795551,21.8416649 L24.4002099,15.7201498 C24.8201705,15.3001892 25.5023269,15.3001892 25.9224595,15.7201498 C26.3408717,16.1401104 26.3408717,16.8205464 25.9224595,17.240679 L19.0398197,24.1224587 C18.8297534,24.332525 18.5551704,24.4374721 18.2795551,24.4374721 Z"
            id="Path"
          />
        </g>
      </g>
    </g>
  </svg>
);

const cardData = {
  active: {
    title: 'Active',
    variant: 'success'
  },
  expiringSoon: {
    title: 'Expiring soon',
    variant: 'warning'
  },
  expired: {
    title: 'Expired',
    variant: 'danger'
  },
  futureDated: {
    title: 'Future dated',
    customIcon: <OutlinedCalendarAltIcon />
  }
};

const SubsWidget = () => {
  const statusCardData = useStatus();
  const isCardDataEmpty = useMemo(
    () =>
      !statusCardData.isLoading &&
      statusCardData?.data &&
      Object.keys(cardData).every((name: keyof typeof cardData) => statusCardData.data[name] === 0),
    [statusCardData]
  );

  return (
    <div className="subscription-inventory">
      {isCardDataEmpty ? (
        <EmptyState variant={EmptyStateVariant.large}>
          <EmptyStateIcon icon={EmptyStateSubscriptionsIcon} />
          <Title headingLevel="h4" size="lg">
            No connected subscriptions
          </Title>
          <EmptyStateBody>
            <Stack>
              <StackItem>
                We cannot find any Red Hat subscriptions attached to your account
              </StackItem>
            </Stack>
          </EmptyStateBody>
        </EmptyState>
      ) : (
        <Gallery
          hasGutter
          className="pf-v5-u-p-md"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          {['active', 'expiringSoon', 'expired', 'futureDated'].map(
            (name: keyof typeof cardData) => {
              return (
                <Link
                  to="/subscriptions/inventory"
                  style={{ flex: 1, textDecoration: 'none' }}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={name}
                >
                  <Alert isInline {...cardData[name]}>
                    {!statusCardData.isLoading && statusCardData?.data && (
                      <p>{statusCardData.data[name]}</p>
                    )}
                  </Alert>
                </Link>
              );
            }
          )}
        </Gallery>
      )}
    </div>
  );
};

export default SubscriptionsWidget;
