'use client';

import {
  Card,
  CardBody,
  Chip,
  Accordion,
  AccordionItem,
} from '@nextui-org/react';
import { useCallback } from 'react';
import { getEvent } from '../services/events';
import { ChipCategory } from './chipCategoy';
import { ConditionalRentalButton } from './buttonAlquiler';
import { useApiRequest } from '@/hooks/useApiRequest';
import { ImageCarousel } from '@/components/utils/carucelImg';
import { getTokenFromCookie } from '@/features/auth/utils/getUserInfo';
import { IUEvent } from '@/interfaces/IUevents';
import { CardInfoLoadin } from '@/components/utils/loagins/cardInfoLoading';
import { notFound } from 'next/navigation';

export default function EventCard({ id }: { id: number }) {
  const fetchEvent = useCallback(() => getEvent(id), [id]);
  const { data, error, isLoading } = useApiRequest<IUEvent>(fetchEvent);

  const userInfo = getTokenFromCookie();

  userInfo?.user.email_verified;
  userInfo?.user.has_completed_profile;

  if (error) notFound();
  if (isLoading) {
    return <CardInfoLoadin />;
  }

  const event = data;

  if (!data && !event) return <div>Error al obtener la información del evento</div>;

  return (
    <Card className="w-full mx-auto">
      <CardBody className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 ">
          <div className="relative p-4 ">
            <Chip
              className="absolute top-2 left-2 z-20"
              color="primary"
              variant="solid"
            >
              Popular
            </Chip>
            <ImageCarousel images={ event ? event.photos : []} />
          </div>

          <div className="flex flex-col gap-4 p-4">
            <div>
              <h1 className="text-2xl font-bold">{ event ? event.event_name : ''}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-semibold">
                  ${ event ? event.event_reference_value : ''}
                </span>
                <Chip size="sm" variant="flat">
                  { event ? event.view_count : ''} visualizaciones
                </Chip>
              </div>
            </div>

            <div>
              <p className="text-sm text-default-500">Detalles de eventos:</p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <Chip size="sm">
                  {event ? event.event_allowed_hours : ''}
                  { event ? event.event_allowed_hours === 1 ? 'hora extra permitida' : 'horas extras permitidas' : ''}
                </Chip>
                <Chip size="sm">
                  ${event ? event.event_extra_hour_rate : ''} extra por hora
                </Chip>
              </div>
            </div>

            <Accordion>
              <AccordionItem
                key="2"
                aria-label="Descripción"
                title="Descripción"
              >
                <p>{ event ? event.event_description : ''}</p>
              </AccordionItem>
              <AccordionItem
                key="1"
                aria-label="Detalles del evento"
                title="Detalles del evento"
              >
                <div className="space-y-2">
                  <ChipCategory idCategory={ event ? event.event_category : 0} />
                  <p>Precio del evento: ${ event ? event.event_reference_value : ''}</p>
                  <p>
                    Fecha de creación:{' '}
                    {new Date( event ? event.creation_date : new Date()).toLocaleDateString()}
                  </p>
                  <p>
                    Fecha de actualización:{' '}
                    {new Date(
                      event ? event.last_actualization_date : new Date(),
                    ).toLocaleDateString()}
                  </p>
                </div>
              </AccordionItem>
            </Accordion>

            <div className="mt-4 flex gap-2">
              <ConditionalRentalButton id={ event ? event.id : 0} />
              {/* <Button
                isIconOnly
                variant="flat"
                size="lg"
              >
                <CiHeart />
              </Button> */}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
